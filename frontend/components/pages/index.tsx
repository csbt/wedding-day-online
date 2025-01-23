import Banner from '../molecules/Banner'
import CapturedMoment from '../molecules/CapturedMoment'
import Couple from '../molecules/Couple'
import JoinWithUs from '../molecules/JoinWithUs'
import Menu from '../molecules/Menu'
import SweetStory from '../molecules/SweetStory'

const Home = () => {
  return (
    <div className='w-full h-[100dvh] mx-auto'>
      <Menu />
      <Banner />
      <Couple
        bride={{
          name: 'Tên cô dâu',
          avatar:
            'https://wpocean.com/html/tf/mylove-live/assets/images/couple/2.jpg',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas non.',
          socials: {
            facebook: 'https://facebook.com/bride',
            instagram: 'https://instagram.com/bride'
          }
        }}
        groom={{
          name: 'Tên chú rể',
          avatar:
            'https://wpocean.com/html/tf/mylove-live/assets/images/couple/3.jpg',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas non.',
          socials: {
            facebook: 'https://facebook.com/groom',
            instagram: 'https://instagram.com/groom'
          }
        }}
      />
      <SweetStory />

      <JoinWithUs />

      <CapturedMoment />
    </div>
  )
}

export default Home
