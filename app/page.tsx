import Image from 'next/image';
import VisiMisiSection from './components/sections/visiMisi';
import ProyekDikerjakanSection from './components/sections/proyekDikerjakan';

export default function Home() {
  return (
    <main>
      <section>
        <VisiMisiSection />
      </section>
      <section>
        <ProyekDikerjakanSection />
      </section>
    </main>
  );
}
