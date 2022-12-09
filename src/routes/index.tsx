import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const count = useSignal(0);
  return (
    <div>
      <h1>
        Counter is {count.value} <span class='lightning'>⚡️</span>
      </h1>
      <button onClick$={() => count.value++}>Increment</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Demo',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
