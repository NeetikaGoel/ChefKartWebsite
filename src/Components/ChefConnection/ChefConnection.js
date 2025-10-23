import AboveAboveFAQ from './AboveAboveFAQ'
import AboveFAQ from './AboveFAQ'
import BenefitSection from './BenefitSection'
import Carousal from './Carousal'
import FAQ2 from './FAQ2'
import SlidingCard from './SlidingCard'
import Statistic from './Statistic'
import Testimonials from './Testimonials'
import VideoSection from './VideoSection'

const ChefConnection = () => {
  return (
    <div>
      <Carousal/>
      <Statistic/>
      <SlidingCard/>
      <BenefitSection/>
     <VideoSection />
     <Testimonials />
     <AboveAboveFAQ />
      <AboveFAQ />
      <FAQ2 />
    </div>
  )
}

export default ChefConnection
