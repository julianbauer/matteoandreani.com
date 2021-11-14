import Layout from '@elements/Layout'
import Meta from '@elements/Meta'
import Header from '@components/Header'
import Grid from '@components/Grid'

export default function Index() {
  return (
    <>
      <Layout>
        <Meta title="Matteo Andreani – Photographer" />
        <Header />
        <Grid />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
