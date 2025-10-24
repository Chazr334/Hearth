import { Metadata } from "next";

import { RuneDivider } from "@/components/rune-divider";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Field Guide"
};

export default function FieldGuidePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 pb-24">
      <Section title="What Do I Wear?">
        <div className="space-y-5 text-lg text-bone/90">
          <p>
            Arrive as the truest version of yourself—keep the gathering
            family-friendly, but let your garb whisper of the hall you call home.
          </p>
          <div className="space-y-3">
            <p>While keeping family friendly vibes in mind, wear whatever you're most comfortable in!</p>
            <p>Some people approach it like renfair garb.</p>
            <p>Some try to be as historical as possible.</p>
            <p>Some lean more Skyrim esqu.</p>
            <p>And some wear blue jeans and a t-shirt or something they feel nice in.</p>
          </div>
          <p>
            It is 100% up to you, and no one will look at you twice as long as you are appropriately dressed
            for a family oriented event in a public state park. Skyclad not welcome. ; )
          </p>
        </div>
      </Section>

      <RuneDivider />

      <Section title="Ok! I'm Ready To Visit! What Do I Bring?">
        <div className="space-y-6 text-lg text-bone/90">
          <div className="space-y-3">
            <h3 className="font-serif text-amber text-xl">A Rock For The Horgr</h3>
            <p>
              A Horgr, or rock altar, is built at every Hearthfire event. People are strongly encouraged to
              bring a rock from their home (or one they found and now keep at home) and add it to the Horgr.
            </p>
            <p>
              Hearthfire is more than just a name. It's an idea. The idea that we are a collection of hearths,
              coming together to share in spirituality. In history the hearth was the heart of the home. So the
              act of bringing a piece of your home in the form of a nice rock and adding it to the collection
              of other rocks, shows us how we are joining houses to build a strong foundation of spiritual
              fellowship.
            </p>
            <p>
              At the end of ritual Wolf The Red will close out ritual by pouring the communal libation onto the
              horgr, there by transferring all the good energy and blessings from the ritual onto the horgr as
              it washes over each rock before reaching the ground and going to the Gods. Then you will take your
              rock with you at the end of the event and carry that blessing back to your home.
            </p>
            <p>
              The size of the rock doesn't matter. We've had massive slabs of marble, and tiny gems. You're
              welcome to bring what ever you can carry. You're welcome to switch it up each time as well.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Gathering Essentials">
        <div className="space-y-6 text-lg text-bone/90">
          <div className="space-y-3">
            <h3 className="font-serif text-amber text-xl">Above all, a smile. Nothing else is required.</h3>
            <p>Some other useful things though:</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-amber/90">Lunch</h4>
            <p>
              Hearthfire lunches are done potluck style! There is a Google-Doc linked likely in the comments of
              the post this was shared in, following these images. Filling that out is mandatory. It helps us
              know who's coming, how much food to prepare, allergies to keep in mind, and if we need more of one
              thing vs another. Don't want all deserts!
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-amber/90">Community Altar</h4>
            <p>
              Every event Wolf The Red builds our community altar. It is the representation of the whole groups
              spirituality. Wolf brings a lot of nice statues and decorations, but if you have something you're
              comfortable bringing that is spiritually significant to you it's highly encouraged you do so!
            </p>
            <p>
              We want everyone to feel represented and included at every event. It can be a small gem, to a large
              idol or statue. There is no limit to what is a valid item. (keeping family friendly in mind! I know
              those fertility deities can be spicy!) At the end of the event just remember to grab your item
              before heading home.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Family Hearthfire">
        <div className="space-y-4 text-lg text-bone/90">
          <p>
            Hearthfire is a family oriented event! It is not a super serious-face environment that seeks to
            silence kids or usher them out of the way. Nothing makes us happier than seeing toddlers and teens
            enjoying the communal space we have built together.
          </p>
          <p>
            We make sure that families get to serve food first so there is plenty of options for pickier eaters.
            We encourage bringing toys for your little ones that they are comfortable sharing. It is usually an
            out door event and so kids will be loud. They may be loud during ritual. They may walk through the
            middle of ritual. That is fine! Kids are allowed to be kids at Hearthfire.
          </p>
          <p>
            We just ask that you help keep an eye on them and work together to maintain peace among the other kids!
          </p>
        </div>
      </Section>

      <RuneDivider />

      <Section title="General Info">
        <div className="space-y-3 text-lg text-bone/90">
          <p>
            Arriving early? Fantastic. Early birds help with pavilion setup, signage, and welcoming first-time
            visitors.
          </p>
          <p>
            We coordinate grill use on site. Label your dishes, note allergens, and expect a shared clean-up
            sweep before we close.
          </p>
          <p>Coolers of water are provided. Please bring reusable bottles.</p>
        </div>
      </Section>

      <Section title="Dogs">
        <div className="space-y-3 text-lg text-bone/90">
          <p>
            Friendly dogs are welcome on a six-foot leash. Mind reactivity,
            clean up promptly, and keep pups out of the ritual circle unless
            pre-arranged with staff.
          </p>
        </div>
      </Section>

      <Section title="Weapons & Substances">
        <div className="space-y-3 text-lg text-bone/90">
          <p>No alcohol or drugs are permitted at Hearthfire events.</p>
          <p>
            Firearms stay secured in vehicles for the duration of the gathering.
          </p>
          <p>
            Ritual blades are welcome in responsible hands. Keep them sheathed
            when you're not actively using them in the rite.
          </p>
        </div>
      </Section>
    </div>
  );
}
