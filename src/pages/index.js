import {
  Navbar,
  HomeComponent,
  Footer,
  Features,
  Articles,
  BuildSection,
  WhyMondu,
  SignUp,
  Mainfooter,
} from "../components";

export default function Home() {
  return (
    <main>
      <section className="first">
        <Navbar />
        <HomeComponent />
        <Footer />
      </section>
      <section className="second">
        <Features />
      </section>
      <Articles />
      <section className="Third">
        <BuildSection />
      </section>
      <section id="forth">
        <WhyMondu />
      </section>
      <SignUp />
      <Mainfooter />
    </main>
  );
}
