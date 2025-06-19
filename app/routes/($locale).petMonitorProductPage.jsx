import PerfectWagglePet from "~/components/PerfectWagglePet"
import WaggleCameraLITE from "~/components/WaggleCameraLITE"
import ComparePetPlans from "~/components/ComparePetPlans"
import TestimonialsSection from "~/components/TestimonialsSection"
import Petquestions from "~/components/Petquestions"
import PetSafetyGrid from "~/components/PetSafetyGrid";

export default function Ambassador() {
    return (
      <div>
       <PerfectWagglePet />
      <WaggleCameraLITE />
      <ComparePetPlans />
      <TestimonialsSection />
      <Petquestions />
      <PetSafetyGrid/>
      </div>  
  );
 }  