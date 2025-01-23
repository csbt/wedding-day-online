export interface WeddingInfo {
  siteContent: SiteContent
  siteSettings: SiteSettings
}

export interface SiteContent {
  homepage: Homepage
  aboutUs: AboutUs
  weddingDetails: WeddingDetails
  giftDetails: GiftDetails
  gallery: Gallery
  rsvp: Rsvp
  guestMessages: GuestMessages
}

export interface Homepage {
  title: string
  subtitle: string
  heroImage: string
  countdown: Countdown
}

export interface Countdown {
  enabled: boolean
  weddingDate: string
}

export interface AboutUs {
  groom: Groom
  bride: Bride
  loveStory: LoveStory[]
}

export interface Groom {
  name: string
  bio: string
  photo: string
}

export interface Bride {
  name: string
  bio: string
  photo: string
}

export interface LoveStory {
  year: number
  event: string
  image: string
  description: string
}

export interface WeddingDetails {
  ceremony: Ceremony
  reception: Reception
  familyDetails: FamilyDetails
  dressCode: string
}

export interface Ceremony {
  date: string
  time: string
  location: Location
}

export interface Location {
  name: string
  address: string
  mapUrl: string
}

export interface Reception {
  date: string
  time: string
  location: Location2
}

export interface Location2 {
  name: string
  address: string
  mapUrl: string
}

export interface FamilyDetails {
  groomFamily: GroomFamily
  brideFamily: BrideFamily
}

export interface GroomFamily {
  parents: string
  address: string
  contact: string
  mapUrl: string
}

export interface BrideFamily {
  parents: string
  address: string
  contact: string
  mapUrl: string
}

export interface GiftDetails {
  groom: Groom2
  bride: Bride2
}

export interface Groom2 {
  bankAccount: string
  bankName: string
  qrCode: string
}

export interface Bride2 {
  bankAccount: string
  bankName: string
  qrCode: string
}

export interface Gallery {
  images: string[]
  videos: Video[]
}

export interface Video {
  title: string
  url: string
}

export interface Rsvp {
  enabled: boolean
  form: Form
}

export interface Form {
  fields: Field[]
  submitMessage: string
}

export interface Field {
  label: string
  type: string
  required: boolean
}

export interface GuestMessages {
  enabled: boolean
  allowAnonymous: boolean
  messages: Message[]
}

export interface Message {
  name: string
  message: string
  timestamp: string
}

export interface SiteSettings {
  theme: string
  music: Music
  languages: string[]
  primaryColor: string
}

export interface Music {
  enabled: boolean
  url: string
}

export const mockWeddingInfo: WeddingInfo = {
  siteContent: {
    homepage: {
      title: 'Welcome to Our Wedding!',
      subtitle: 'Join us on our special day',
      heroImage: '/images/hero.jpg',
      countdown: {
        enabled: true,
        weddingDate: '2025-05-15T18:00:00'
      }
    },
    aboutUs: {
      groom: {
        name: 'Cao Tuyển',
        bio: 'Cao Tuyển là một chàng trai ấm áp và chân thành, luôn mang lại cảm giác an toàn cho những người xung quanh. Anh yêu thích khám phá, từ những chuyến du lịch đến các hoạt động ngoài trời, nơi anh tìm thấy sự kết nối với thiên nhiên. Là người cẩn thận và chu đáo, anh luôn đặt gia đình và người thân yêu lên hàng đầu. Đối với anh, hạnh phúc không chỉ là những thành công lớn lao mà còn là những khoảnh khắc giản dị, cùng người mình yêu thương xây dựng một cuộc sống tràn đầy ý nghĩa.',
        photo: '/images/groom/avatar.jpg'
      },
      bride: {
        name: 'An Châu',
        bio: 'An Châu là một cô gái nhẹ nhàng và tinh tế, luôn mang lại cảm giác thoải mái cho mọi người. Cô yêu thích những điều nhỏ bé trong cuộc sống, từ việc chăm sóc gia đình đến việc tạo ra những kỷ niệm đáng nhớ cùng bạn bè. Với sự nhạy cảm và trái tim yêu thương, cô luôn biết cách làm người khác cảm thấy được quan tâm và trân trọng. Đối với cô, tình yêu là hành trình sẻ chia, cùng nhau vượt qua mọi khó khăn và cùng tạo dựng một tương lai đầy ắp niềm vui.',
        photo: '/images/bride/avatar.jpg'
      },
      loveStory: [
        {
          year: 2020,
          event: "We met for the first time at a mutual friend's party.",
          image: '/images/love-story/love-story-1.jpg',
          description: 'It was love at first sight.'
        },
        {
          year: 2021,
          event: 'He proposed during a trip to Đà Lạt.',
          image: '/images/love-story/love-story-2.jpg',
          description: 'I said yes!'
        },
        {
          year: 2022,
          event: 'We bought our first home together.',
          image: '/images/love-story/love-story-3.jpg',
          description: 'We started  building our future together.'
        },
        {
          year: 2024,
          event: 'We are getting married!',
          image: '/images/love-story/love-story-4.jpg',
          description: 'Join us as we celebrate our love.'
        }
      ]
    },
    weddingDetails: {
      ceremony: {
        date: '2025-05-15',
        time: '15:00',
        location: {
          name: 'Nhà Thờ Lớn Hà Nội',
          address: '40 Nhà Chung, Hoàn Kiếm, Hà Nội',
          mapUrl: 'https://maps.google.com/example-church'
        }
      },
      reception: {
        date: '2025-05-15',
        time: '18:00',
        location: {
          name: 'Trung Tâm Tiệc Cưới Đông Phương',
          address: '456 Đường Lý Thái Tổ, Quận 3, TP.HCM',
          mapUrl: 'https://maps.google.com/example-reception'
        }
      },
      familyDetails: {
        groomFamily: {
          parents: 'Nguyễn Văn C & Phạm Thị D',
          address: '123 Đường Lý Chính Thắng, Quận 10, TP.HCM',
          contact: '0987654321',
          mapUrl: 'https://maps.google.com/example-groom'
        },
        brideFamily: {
          parents: 'Trần Văn E & Nguyễn Thị F',
          address: '456 Đường Trần Hưng Đạo, Quận 1, TP.HCM',
          contact: '0976543210',
          mapUrl: 'https://maps.google.com/example-bride'
        }
      },
      dressCode: 'Elegant/Formal'
    },
    giftDetails: {
      groom: {
        bankAccount: '0123456789',
        bankName: 'Ngân Hàng ACB',
        qrCode: 'https://example.com/groom-qr.png'
      },
      bride: {
        bankAccount: '9876543210',
        bankName: 'Ngân Hàng Vietcombank',
        qrCode: 'https://example.com/bride-qr.png'
      }
    },
    gallery: {
      images: [
        '/images/captures/capture-1.jpg',
        '/images/captures/capture-2.jpg',
        '/images/captures/capture-3.jpg',
        '/images/captures/capture-4.jpg',
        '/images/captures/capture-5.jpg',
        '/images/captures/capture-6.jpg',
        '/images/captures/capture-7.jpg',
        '/images/captures/capture-8.jpg',
        '/images/captures/capture-9.jpg'
      ],
      videos: [
        {
          title: 'Our Engagement Story',
          url: 'https://example.com/video1.mp4'
        }
      ]
    },
    rsvp: {
      enabled: true,
      form: {
        fields: [
          {
            label: 'Full Name',
            type: 'text',
            required: true
          },
          {
            label: 'Phone Number',
            type: 'tel',
            required: true
          },
          {
            label: 'Number of Guests',
            type: 'number',
            required: true
          },
          {
            label: 'Special Notes',
            type: 'textarea',
            required: false
          }
        ],
        submitMessage: 'Thank you for confirming your attendance!'
      }
    },
    guestMessages: {
      enabled: true,
      allowAnonymous: false,
      messages: [
        {
          name: 'Lê Văn C',
          message: "Congratulations! Can't wait to celebrate with you!",
          timestamp: '2025-01-10T10:30:00'
        },
        {
          name: 'Phạm Thị D',
          message: 'Chúc mừng hạnh phúc hai bạn!',
          timestamp: '2025-02-05T14:00:00'
        }
      ]
    }
  },
  siteSettings: {
    theme: 'romantic',
    music: {
      enabled: true,
      url: 'https://example.com/background-music.mp3'
    },
    languages: ['en', 'vi'],
    primaryColor: '#DD5CA2'
  }
}
