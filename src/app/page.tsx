import Banner from '@/components/banner/banner';
import Apartments from '@/components/apartments/apartments';
import Locations from '@/components/locations/locations';
import ProjectLocation from '@/components/projlocation/projlocation';
import PropertySpecification from '@/components/property/property';
import ClientReviews from '@/components/ourclient/ourclient';

export default function Home() {
  return (
    <main>
      <Banner />
      <Apartments />
      <Locations />
      <PropertySpecification/>
      
      <ClientReviews/>
    <ProjectLocation/>
    </main>
  );
}
