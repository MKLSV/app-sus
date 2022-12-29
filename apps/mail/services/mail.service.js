import { utilService } from "../../../services/util.service.js";
import { storageService } from '../../../services/async-storage.service.js'

const MAILS_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    remove
}

function query() {
    return storageService.query(MAILS_KEY).then(mails => {
        return mails
    })
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
                isRead: false,
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
                isRead: false,
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
                isRead: false,
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
                isRead: false,
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
                isRead: false,
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
                isRead: false,
                sentAt: 155110930594,
                isStarred: true,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'

            },
        ]
        utilService.saveToStorage(MAILS_KEY, mails)
    }
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
}