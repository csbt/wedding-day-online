import Banner from '../molecules/Banner'
import CapturedMoment from '../molecules/CapturedMoment'
import Couple from '../molecules/Couple'
import JoinWithUs from '../molecules/JoinWithUs'
import Menu from '../molecules/Menu'
import SweetStory from '../molecules/SweetStory'
import AttendingForm from '../molecules/AttendingForm'
import ThemeToggles from '../ThemeToggle'

const Home = () => {
  return (
    <div className='w-full h-[100dvh] mx-auto'>
      <Menu />
      <Banner />
      <Couple
        bride={{
          name: 'Khánh Huyền',
          avatar:
            'https://wpocean.com/html/tf/mylove-live/assets/images/couple/2.jpg',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas non.',
          socials: {
            facebook: 'https://www.facebook.com/hoangkhanhhuyen1010',
            instagram: 'https://www.facebook.com/hoangkhanhhuyen1010'
          }
        }}
        groom={{
          name: 'Xuân Trường',
          avatar:
            'https://wpocean.com/html/tf/mylove-live/assets/images/couple/3.jpg',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas non.',
          socials: {
            facebook: 'https://www.facebook.com/csbt7/',
            instagram: 'https://www.facebook.com/csbt7/'
          }
        }}
      />
      <SweetStory />

      <JoinWithUs />

      <CapturedMoment />

      <AttendingForm />
    </div>
  )
}

export default Home
