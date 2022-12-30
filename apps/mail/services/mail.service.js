import { utilService } from "../../../services/util.service.js";
import { storageService } from '../../../services/async-storage.service.js'

const MAILS_KEY = 'mailDB'
const USER_KEY = 'userDB'
_createMails()
_loggedUser()

export const mailService = {
    query,
    remove,
    save,
    getEmptyMail,
    get,
    getUser
}

function _loggedUser() {
    const loggedinUser = {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
    }
    utilService.saveToStorage(USER_KEY, loggedinUser)
}

function getUser(){
    return utilService.loadFromStorage(USER_KEY)
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}

function query(filterBy = 'inbox') {
    return storageService.query(MAILS_KEY)
        .then(mails => {
            if (filterBy === 'inbox') {
                mails = mails.filter(mail => mail.isSent !== true && mail.isDraft !== true && mail.onTrash !== true)
            }
            else if (filterBy === 'starred') {
                mails = mails.filter(mail => mail.isStarred === true)
            }
            else if (filterBy === 'sent') {
                mails = mails.filter(mail => mail.isSent === true)
            }
            else if (filterBy === 'draft') {
                mails = mails.filter(mail => mail.isDraft === true)
            }
            else if (filterBy === 'trash') {
                mails = mails.filter(mail => mail.onTrash === true)
            }
            return mails
        })
}
function save(mail) {
    if (mail.id) {
        return storageService.put(MAILS_KEY, mail)
    } else {
        return storageService.post(MAILS_KEY, mail)
    }
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
}

function getEmptyMail() {
    const loggedinUser = utilService.loadFromStorage(USER_KEY)
    return {
        name: loggedinUser.fullname,
        subject: '',
        body: '',
        onTrash: false,
        isRead: false,
        isDraft: false,
        isSent: true,
        sentAt: Date.now(),
        isStarred: false,
        removedAt: null,
        from: loggedinUser.email,
        to: ''
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: 'e101',
                name: 'Jack',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: Date.now(),
                isStarred: false,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e102',
                name: 'Will',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 1551133130594,
                isStarred: false,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e103',
                name: 'Moma',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 1551133000594,
                isStarred: false,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e104',
                name: 'Ali',
                subject: 'Miss you!',
                body: 'Wore youuld love to ve to catch up sometimes',
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 1551033930594,
                isStarred: false,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e105',
                name: 'Vasya',
                subject: 'How aare you!',
                body: 'WoHow aare youuld love to catch uHow aare youp sometimes',
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 1550533930594,
                isStarred: false,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e106',
                name: 'Guf',
                subject: 'Hey you!',
                body: 'Would love to caWould love toWould love totch up sometimes',
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 155110930594,
                isStarred: true,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e107',
                name: 'mama',
                subject: 'Hey you!',
                body: 'Would love to caWould love toWould love totch up sometimes',
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: true,
                sentAt: 155110930594,
                isStarred: false,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e108',
                name: 'papa',
                subject: 'Hey you!',
                body: 'Would love to caWould love toWould love totch up sometimes',
                onTrash: false,
                isRead: false,
                isDraft: true,
                isSent: false,
                sentAt: 155110930594,
                isStarred: false,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e109',
                name: 'trash',
                subject: 'Hey you!',
                body: 'Would love to caWould love toWould love totch up sometimes',
                onTrash: true,
                isRead: false,
                isDraft: true,
                isSent: false,
                sentAt: 155110930594,
                isStarred: false,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
        ]
        utilService.saveToStorage(MAILS_KEY, mails)
    }
}