import { utilService } from "../../../services/util.service.js";
import { storageService } from '../../../services/async-storage.service.js'

const MAILS_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
}

function query() {
    return storageService.query(MAILS_KEY).then(mails => {
        console.log(mails)
        return mails
    })
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: 'e101',
                name:'Jack',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo1@momo.com'
            },
            {
                id: 'e102',
                name:'Will',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133130594,
                to: 'momo2@momo.com'
            },
            {
                id: 'e103',
                name:'Moma',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133000594,
                to: 'mom3o@momo.com'
            },
            {
                id: 'e104',
                name:'Ali',
                subject: 'Miss you!',
                body: 'Wore youuld love to ve to catch up sometimes',
                isRead: false,
                sentAt: 1551033930594,
                to: 'ababa4o@momo.com'
            },
            {
                id: 'e105',
                name:'Vasya',
                subject: 'How aare you!',
                body: 'WoHow aare youuld love to catch uHow aare youp sometimes',
                isRead: false,
                sentAt: 1550533930594,
                to: 'mom5o@momo.com'
            },
            {
                id: 'e106',
                name:'Guf',
                subject: 'Hey you!',
                body: 'Would love to caWould love toWould love totch up sometimes',
                isRead: false,
                sentAt: 155110930594,
                to: 'momo6@momo.com'
            },
        ]
        utilService.saveToStorage(MAILS_KEY, mails)
    }
    console.log(mails)
}