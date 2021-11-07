import Layout from '../components/Layout';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Spanish from '../components/Spanish';

const index = () => {
  return (
    <>
      <Layout>
        <About/>
        <Projects/>
        <Skills/>
        {/* <Spanish /> */}
        <Contact/>
      </Layout>
    </>
  )
}
export default index;