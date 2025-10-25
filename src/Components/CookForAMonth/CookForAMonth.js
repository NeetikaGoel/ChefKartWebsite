
import AboveAboveFAQ3 from './AboveAboveFAQ3'
import AboveFAQ3 from './AboveFAQ3'
import AboveHowItWorks from './AboveHowItWorks'
import Banner from './Banner'
import BelowBanner from './BelowBanner'
import EndBanner from './EndBanner'
import FAQ3 from './faq3'
import HowItWorks from './HowItWorks'
import Stats from './Stats'
import TestimonialsSliding from './TestimonialsSliding'
import VideoSection2 from './VideoSection2'

const CookForAMonth = () => {
  return (
    <div>
      <Banner />
      <BelowBanner />
      <AboveHowItWorks />
      <Stats/>
      <HowItWorks />
      <VideoSection2/>
      <TestimonialsSliding/>
      <AboveAboveFAQ3/>
      <AboveFAQ3 />
      <FAQ3 />
      <EndBanner/>
    </div>
  )
}

export default CookForAMonth
