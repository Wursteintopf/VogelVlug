import type { NextPage } from 'next'
import Head from 'next/head'
import { getAPI } from '../lib/api'
import Footer from '../components/02_Organisms/Footer.tsx/Footer'
import TextBox from '../components/02_Organisms/TextBox/TextBox'

interface ImpressumProps {
  title: string,
  text: string,
}

const fallback: ImpressumProps = {
  title: '',
  text: ''
}

const Impressum: NextPage<ImpressumProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title} | VogelVlug</title>
      </Head>

      <TextBox title={props.title} text={props.text} />

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const impressum = await getAPI('/richtexts', { filters: { slug: 'impressum' } })

  return {
    props: impressum[0]?.attributes || fallback,
    revalidate: 30,
  }
}

export default Impressum
