import Banner from '@/components/banner/banner';
import Apartments from '@/components/apartments/apartments';
import Locations from '@/components/locations/locations';

export default function Home() {
  return (
    <main>
      <Banner />
      <Apartments />
      <Locations />
    </main>
  );
}
