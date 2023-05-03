import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Footer } from "@component/provider/footer";
import { Layout } from "@component/provider/layout";
import { Main } from "@component/provider/main";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => (
  <Layout>
    <Main>
      <Slot />
    </Main>
    <Footer />
  </Layout>
));
