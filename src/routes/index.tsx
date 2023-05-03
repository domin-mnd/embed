import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Badge } from "@component/ui/badge";
import { Box } from "@component/ui/box";
import { Input } from "@component/ui/input";
import { theme } from "@theme/general";
import { box, container } from "./styles.css";

export default component$(() => {
  return (
    <div class={container}>
      <Box width={300} class={box}>
        <Badge color={theme.color.badge.yellow} label="Site Name" />
        <Input placeholder="Upper site name" />
      </Box>
      <Box width={300} class={box}>
        <Badge color={theme.color.badge.blue} label="Title" />
        <Input placeholder="Your title" />
      </Box>
      {/* <Box width={212} class={box}>
        <span>Pick your color</span>
        <Input placeholder="Your title" />
      </Box> */}
      <Box width={300} class={box}>
        <Badge color={theme.color.badge.purple} label="Description" />
        <Input placeholder="A detailed description" textarea />
      </Box>
      <Box width={181} class={box}>
        <Badge color={theme.color.badge.pink} label="Image" />
        <Input type="file" />
      </Box>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
