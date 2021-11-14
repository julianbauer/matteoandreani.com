import Layout from '@elements/Layout'
import Meta from '@elements/Meta'

export default function Index() {
  return (
    <>
      <Layout>
        <Meta title="Page not found" />
        <h1>Page not found</h1>
        <p>This page doesn&apos;t exist.</p>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
