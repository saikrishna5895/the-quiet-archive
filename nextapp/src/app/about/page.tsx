import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sai Krishna — writer, thinker, father. On writing as a way of understanding life.",
};

export default function AboutPage() {
  return (
    <div className="container">
      <section className="page-header">
        <span className="label">About</span>
        <h1>On Writing and Living</h1>
      </section>

      <div className="about-body">
        <p>
          I came to writing the way most people come to anything that matters,
          not by choosing it, but by finding that I couldn&apos;t stop. It started
          as notebooks, then documents no one was meant to
          read, then slowly, reluctantly, a blog. Writing, I have come to
          believe, is less a skill and more a method. A way of forcing yourself
          to actually think rather than just nod along to the stream of feeling
          and opinion that passes for thought in ordinary life.
        </p>

        <p>
          I write about ideas, the professional kind, the kind that sits at
          the edge of disciplines and refuses to be leave the head. I write about my
          personal life, though carefully and selectively, because I believe
          honesty has value only when it costs something. And lately I write
          about fatherhood, which has been the most disorienting and clarifying
          thing that has ever happened to me.
        </p>

        <blockquote>
          &ldquo;How do we know what we think until we see what we say?&rdquo;
          <br />
          <small>— E.M. Forster</small>
        </blockquote>

        <p>
          My son is a toddler. He is at the age where everything is a
          question and every question requires a full answer. Watching him
          encounter the world, its colours, its textures, its inexplicable
          injustices like being told it&apos;s time to stop playing, has made me
          look more carefully at the world myself. Children are the closest
          thing most of us will get to fieldwork in pure wonder.
        </p>

        <p>
          I also think about attention a lot. We live in a time that profits from
          distraction, that has turned fragmentation into an aesthetic. I am
          not interested in being efficient with my attention. I am interested
          in being present with it, in reading slowly, thinking slowly,
          writing slowly, and accepting that the things worth understanding
          almost never yield to the first reading.
        </p>

        <h3>What this blog is</h3>

        <p>
          These pages are not a portfolio. They are not a newsletter. They are
          not optimised for growth or engagement or any of the metrics that now
          govern how writers think about their work. They are, as simply as I
          can put it, a place where I write what I mean and mean what I write.
        </p>

        <p>
          <strong>Essays</strong>: Long-form thinking on professional ideas,
          culture, books, and the things I cannot stop turning over in my head.
        </p>

        <p>
          <strong>Reflections</strong> : More personal. Quieter. The kind of
          writing that is harder to explain and easier to feel.
        </p>

        <p>
          <strong>Fatherhood</strong> : Dispatches from the floor, from
          bedtime, from the long slow work of watching a person become
          themselves.
        </p>

        <h3>Get in touch</h3>

        <p>
          I love hearing from readers. Write to me at{" "}
          <a href="mailto:weforchange009@gmail.com">weforchange009@gmail.com</a>. I
          read every message; I reply when I can.
        </p>

        <div className="ornament">· · ·</div>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.88rem",
            fontStyle: "italic",
          }}
        >
          This site is built with Next.js and MDX. No algorithms, no tracking,
          no ads. Just writing, served as simply as possible.
        </p>
      </div>
    </div>
  );
}
