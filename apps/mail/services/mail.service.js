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

function getUser() {
    return utilService.loadFromStorage(USER_KEY)
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}

// function query(filter = 'inbox') {
//     return storageService.query(MAILS_KEY)
//     .then(mails => {
//         if(filterBy.txt) {
//             const regex = new RegExp(filterBy.txt, 'i')
//             mails = mails.filter(mail => regex.test(mail.subject))
//         }
//         return mails
//     })
// }

function query(filterBy) {
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
                name: 'Jack Black',
                subject: 'Hello!',
                body: "Hello! It's great to see you here today. I hope you're doing well and having a fantastic day. It's always nice to have the opportunity to connect with someone new and have a friendly conversation. Is there anything specific you'd like to talk about, or do you just want to chat about whatever is on your mind? I'm here to listen and help in any way I can. Feel free to ask me anything or just share a little bit about yourself. I'm looking forward to getting to know you better!",
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: Date.now(),
                isStarred: false,
                removedAt: null,
                from: 'jack1991@gmail.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e102',
                name: 'Will Smith',
                subject: 'Answer me!!!',
                body: "Hello again! I hope you're having a great day so far. It's always nice to connect with someone new and have a friendly conversation. Is there anything specific you'd like to talk about, or do you just want to chat about whatever is on your mind? I'm here to listen and help in any way I can. Whether you need someone to lend a listening ear or have a specific question or concern, I'm here to help. So feel free to share a little bit about yourself or ask me anything you'd like. I'm looking forward to getting to know you better and having a enjoyable conversation. Let's chat!",
                onTrash: false,
                isRead: true,
                isDraft: false,
                isSent: false,
                sentAt: 1551133130594,
                isStarred: false,
                removedAt: null,
                from: 'smith@gmail.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e103',
                name: 'Moma',
                subject: 'Miss you!',
                body: "Hey there, I hope you're doing well. I just wanted to reach out and say that I miss you. It's been a while since we've been able to hang out and catch up in person, and I really miss those moments. I hope everything is going well for you and that you're taking care of yourself. I'm here for you if you ever need someone to talk to or just want to hang out and catch up. I miss spending time with you and hope we can make it happen soon.Take care and keep in touch!Best regards",
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 1551133000594,
                isStarred: false,
                removedAt: null,
                from: 'moma@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e104',
                name: 'Ali',
                subject: 'I Find You!',
                body: "Hello there I hope this message finds you well. I just wanted to reach out and say hello and see how you're doing. It's been a while since we've had the chance to chat and catch up, and I've been thinking about you lately. I hope everything is going well for you and that you're taking care of yourself. If you ever need someone to talk to or just want to hang out and catch up, I'm here for you. It would be great to reconnect and spend some time together soon.Take care and keep in touch!",
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 1551033930594,
                isStarred: false,
                removedAt: null,
                from: 'ali@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e105',
                name: 'Vasya',
                subject: 'Hey again',
                body: "Sed bibendum lacus sit amet risus vulputate, laoreet suscipit ex tincidunt. Duis risus est, rutrum a elit quis, eleifend iaculis arcu. Mauris nulla dui, elementum non varius sit amet, tempus at ligula. Duis fermentum, risus nec imperdiet volutpat, augue nulla luctus lorem, non efficitur nisi lorem id ipsum. Nulla nec mauris non leo feugiat egestas a eu augue. Mauris ut mollis orci. Nullam quis felis nisl.Nam sit amet mattis massa. Donec eros magna, imperdiet at euismod non, facilisis cursus neque. Nullam dolor ante, efficitur auctor condimentum ut, ultrices ac lacus. Sed ut ante id arcu molestie ullamcorper. Aliquam scelerisque.",
                onTrash: false,
                isRead: true,
                isDraft: false,
                isSent: false,
                sentAt: 1550633930594,
                isStarred: false,
                removedAt: null,
                from: 'vasya@mail.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e106',
                name: 'Mimo',
                subject: 'Hey you!',
                body: 'Duis consectetur risus non elementum tempus. Nunc massa purus, tincidunt quis consectetur non, dapibus eget eros. Praesent accumsan velit vel elit lacinia, eget lacinia odio aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Praesent nec felis arcu. Nulla semper velit id semper luctus. Maecenas ac lectus augue. Nunc eget nibh interdum mauris cursus varius quis pharetra neque. Donec vel ultrices turpis, et ultrices tortor. Curabitur et aliquet velit.',
                onTrash: false,
                isRead: true,
                isDraft: false,
                isSent: false,
                sentAt: 155002930594,
                isStarred: true,
                removedAt: null,
                from: 'mimo@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e107',
                name: 'Mama',
                subject: 'Wash the dishes!',
                body: "Mauris fermentum nulla eget urna gravida ornare. Mauris aliquam fermentum lacus, vitae condimentum elit hendrerit sit amet. Vivamus tincidunt semper sagittis. Vivamus laoreet, nisi ut condimentum euismod, purus arcu blandit lectus, at malesuada nibh enim mattis urna. Fusce fermentum venenatis nunc et dignissim. Ut consequat nisl eu pellentesque euismod. Nullam cursus purus at dui pellentesque elementum. Fusce vitae velit eu risus gravida sodales vitae eu purus. Etiam ligula enim, semper non viverra quis, fringilla a magna. Cras elementum massa ut.",
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 155105830594,
                isStarred: false,
                removedAt: null,
                from: 'mom@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e108',
                name: 'Friend',
                subject: 'Sup!',
                body: "Curabitur sodales urna vitae enim porttitor consequat sit amet et diam. Donec nec bibendum risus. Vestibulum cursus dui fringilla, feugiat arcu vitae, sagittis odio. Ut maximus est ac nibh feugiat vestibulum. Ut cursus lectus sit amet quam efficitur malesuada. Fusce auctor odio lorem, quis pulvinar lectus malesuada ut. Sed sed bibendum odio, vel tincidunt nisi. Mauris leo turpis, tristique eget neque eget, pellentesque scelerisque mauris. Praesent dictum vel nibh in volutpat. Sed ultricies nibh mi, quis semper elit pharetra eu. Nullam ligula velit, fermentum id blandit non, rhoncus eu urna.",
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 155102939594,
                isStarred: false,
                removedAt: null,
                from: 'unknow@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e109',
                name: 'Donald Trump',
                subject: 'I got some jod for you',
                body: "Curabitur sodales urna vitae enim porttitor consequat sit amet et diam. Donec nec bibendum risus. Vestibulum cursus dui fringilla, feugiat arcu vitae, sagittis odio. Ut maximus est ac nibh feugiat vestibulum. Ut cursus lectus sit amet quam efficitur malesuada. Fusce auctor odio lorem, quis pulvinar lectus malesuada ut. Sed sed bibendum odio, vel tincidunt nisi. Mauris leo turpis, tristique eget neque eget, pellentesque scelerisque mauris. Praesent dictum vel nibh in volutpat. Sed ultricies nibh mi, quis semper elit pharetra eu. Nullam ligula velit, fermentum id blandit non, rhoncus eu urna.",
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 155009930594,
                isStarred: true,
                removedAt: null,
                from: 'unknow@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e110',
                name: 'Just Friend',
                subject: 'Were are you',
                body: "Curabitur sodales urna vitae enim porttitor consequat sit amet et diam. Donec nec bibendum risus. Vestibulum cursus dui fringilla, feugiat arcu vitae, sagittis odio. Ut maximus est ac nibh feugiat vestibulum. Ut cursus lectus sit amet quam efficitur malesuada. Fusce auctor odio lorem, quis pulvinar lectus malesuada ut. Sed sed bibendum odio, vel tincidunt nisi. Mauris leo turpis, tristique eget neque eget, pellentesque scelerisque mauris. Praesent dictum vel nibh in volutpat. Sed ultricies nibh mi, quis semper elit pharetra eu. Nullam ligula velit, fermentum id blandit non, rhoncus eu urna.",
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 155100630594,
                isStarred: false,
                removedAt: null,
                from: 'unknow@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e111',
                name: 'Some Brian',
                subject: 'Nice to meet you',
                body: "Curabitur sodales urna vitae enim porttitor consequat sit amet et diam. Donec nec bibendum risus. Vestibulum cursus dui fringilla, feugiat arcu vitae, sagittis odio. Ut maximus est ac nibh feugiat vestibulum. Ut cursus lectus sit amet quam efficitur malesuada. Fusce auctor odio lorem, quis pulvinar lectus malesuada ut. Sed sed bibendum odio, vel tincidunt nisi. Mauris leo turpis, tristique eget neque eget, pellentesque scelerisque mauris. Praesent dictum vel nibh in volutpat. Sed ultricies nibh mi, quis semper elit pharetra eu. Nullam ligula velit, fermentum id blandit non, rhoncus eu urna.",
                onTrash: false,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 155100730594,
                isStarred: false,
                removedAt: null,
                from: 'unknow@momo.com',
                to: 'user@appsus.com'

            },
            {
                id: 'e112',
                name: 'trash',
                subject: 'Hey you!',
                body: 'Would love to caWould love toWould love totch up sometimes Curabitur sodales urna vitae enim porttitor consequat sit amet et diam. Donec nec bibendum risus. Vestibulum cursus dui fringilla, feugiat arcu vitae, sagittis odio. Ut maximus est ac nibh feugiat vestibulum. Ut cursus lectus sit amet quam efficitur malesuada. Fusce auctor odio lorem, quis pulvinar lectus malesuada ut. Sed sed bibendum odio, vel tincidunt nisi. Mauris leo turpis, tristique eget neque eget, pellentesque scelerisque mauris. Praesent dictum vel nibh in volutpat. Sed ultricies nibh mi, quis semper elit pharetra eu. Nullam ligula velit, fermentum id blandit non, rhoncus eu urna.',
                onTrash: true,
                isRead: false,
                isDraft: false,
                isSent: false,
                sentAt: 155100980594,
                isStarred: false,
                removedAt: null,
                from: 'trash@momo.com',
                to: 'user@appsus.com'

            },
        ]
        utilService.saveToStorage(MAILS_KEY, mails)
    }
}