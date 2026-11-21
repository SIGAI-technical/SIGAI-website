import type { FeatureArticle } from './editorial-features';

export const HOME_ARTICLE: FeatureArticle = {
  slug: 'the-map-in-the-machine',
  authors: ['Arya'],
  title: 'The Map in the Machine',
  deck: 'A robot vacuum learns the shape of a home to do a better job. That useful map raises a harder question about where household data travels and how long it stays.',
  summary: 'Smart maps make robot vacuums more useful, but they can turn a floor plan into persistent account data. This iRobot case study separates navigation, cloud maps, and optional images, then follows the cost of storing and deleting each kind of record.',
  acknowledgement: 'Pew Research Center’s survey and iRobot’s published product documentation made the figures and data flows in this article checkable. The exact documents are listed in References. No household interview or device audit was conducted.',
  excerpt: 'An iRobot case study on mapping, cameras, cloud storage, consent, and the economics of a connected home.',
  category: 'Privacy',
  topics: ['Artificial intelligence', 'Privacy', 'Robotics', 'Smart homes', 'Data governance', 'Computer vision'],
  date: '15 Oct 2026',
  dateTime: '2026-10-15',
  readingTime: '9 min read',
  image: '/editorial/home-map-cover-2026.png',
  imageWidth: 1672,
  imageHeight: 941,
  imageAlt: 'Pearlescent abstract waves with iridescent blue and orange edges against a black field.',
  searchTerms: 'robot vacuum Roomba iRobot privacy smart maps camera cloud home sensors connected devices data flows',
  opening: <>
    <p className="reading-opening">At seven in the morning, a robot vacuum crosses a kitchen, avoids a chair, and cleans around a table. To repeat that route efficiently, it needs a memory of space. The app may turn that memory into named rooms, schedules, keep out zones, and a history of cleaning jobs. The convenience is real. So is the fact that a private floor plan has become product data.</p>
    <p>This is no longer an edge case. In a February 2026 Pew Research Center survey, 13% of US adults reported having a robot vacuum with AI features, compared with 18% for smart doorbells and 35% for smart speakers. The survey does not tell us which brands they use or whether every device uploads a map. It does show that domestic sensing is moving from specialist gadget to ordinary household product. The engineering question is not whether every vacuum is secretly recording a home. It is which data each feature requires, where that data goes, and which choices remain available when a person declines to share it.</p>
    <figure className="reading-figure" aria-label="Pew 2026 survey: 35 percent of US adults report an AI smart speaker, 18 percent an AI smart doorbell, 13 percent an AI robot vacuum, and 11 percent an AI smart thermostat">
      <p className="reading-figure__title">US adults reporting devices with AI features</p>
      <div className="reading-figure__survey">
        <div><span>Smart speaker</span><strong>35%</strong><span className="reading-figure__survey-track"><i style={{ width: '70%' }} /></span></div>
        <div><span>Smart doorbell</span><strong>18%</strong><span className="reading-figure__survey-track"><i style={{ width: '36%' }} /></span></div>
        <div><span>Robot vacuum</span><strong>13%</strong><span className="reading-figure__survey-track"><i style={{ width: '26%' }} /></span></div>
        <div><span>Smart thermostat</span><strong>11%</strong><span className="reading-figure__survey-track"><i style={{ width: '22%' }} /></span></div>
      </div>
      <div className="reading-figure__survey-scale" aria-hidden="true"><span>0%</span><span>50% of US adults</span></div>
      <figcaption>Pew Research Center survey of US adults, 17–23 February 2026. Respondents reported devices they have that use AI; this is not a measure of iRobot ownership, cloud mapping, or the share of households. See Pew in References.</figcaption>
    </figure>
  </>,
  sections: [
    { id: 'measurement', title: 'How a cleaning route becomes a record', content: <>
      <p>A robot estimates its location from wheel motion, obstacle contacts, optical sensors, cameras, and sometimes other ranging methods, depending on the model. It uses those observations to build a representation of walls, open floor, furniture, and places it has already cleaned. The representation need not look like a photograph to carry meaning. A room boundary and a name such as “bedroom” can reveal more about a home than a raw sensor reading.</p>
      <p>iRobot’s policy describes possible environment data across its connected product range: floor plans, room names, zones, movement, dirt levels, floor type, and detected objects. It also describes pet and human presence for particular functions. That list is a company wide data inventory, not a statement that every Roomba collects every field. The exact device generation and enabled features matter. A careful review starts with a model number and the settings actually turned on.</p>
      <p>There are at least three layers of data to separate. The robot needs immediate sensor readings to move without hitting a wall. The app may need a persistent map to let a resident choose a room. A cloud service may store that map so the app can retrieve it later. A privacy discussion that treats all three as one thing cannot identify where the real choice or exposure sits.</p>
    </> },
    { id: 'cloud', title: 'The cloud changes the bargain', content: <>
      <p>For iRobot Imprint Smart Maps, the company says maps are stored in its cloud rather than only in the phone app. Deleting the app does not erase them. The company also says turning off Mapping Features stops spatial data from being sent to its cloud. The price of that choice is functional: directed room cleaning, targeted zones, keep out zones, and some schedules or favorites stop working. Re-enabling the feature requires creating a new map.</p>
      <figure className="reading-figure" aria-label="Map data flow from robot to iRobot cloud and app features">
        <p className="reading-figure__title">Where an Imprint Smart Map goes</p>
        <div className="reading-figure__flow">
          <div className="reading-figure__step"><strong>Robot</strong>Builds spatial data while cleaning</div>
          <span className="reading-figure__arrow" aria-hidden="true">→</span>
          <div className="reading-figure__step"><strong>iRobot Cloud</strong>Processes and stores the map</div>
          <span className="reading-figure__arrow" aria-hidden="true">→</span>
          <div className="reading-figure__step"><strong>App features</strong>Room targeting, zones and schedules</div>
        </div>
        <figcaption>Based on iRobot’s Imprint Smart Maps guidance. Turning off Mapping Features stops new spatial data being sent to the cloud and removes some mapped controls; existing maps require separate deletion. See iRobot guidance in References.</figcaption>
      </figure>
      <p>That trade-off is understandable from a product standpoint. Persistent maps make the service convenient across sessions and permit richer controls. The same design creates an account linked asset that has to be stored, secured, retained, and deleted. Encryption and access controls reduce risk; they do not make data disappear. The security of the account and the company’s cloud operations become part of the security of the home map.</p>
      <p>Deleting a map is a separate action from uninstalling an app or disconnecting a robot. iRobot publishes a map deletion procedure. A resident should be able to find it without reading a legal policy. A well designed interface would show where maps live, whether a new map has been created, what happens to old versions, and how deletion affects cleaning features. The need for this clarity follows directly from the product architecture.</p>
    </> },
    { id: 'camera', title: 'A camera is several different data flows', content: <>
      <p>The presence of a lens is not enough to describe the privacy risk. A localisation camera can process visual information for navigation without saving a picture. An obstacle review feature can capture an image for the account holder to inspect. A product improvement program can invite a person to contribute an image to a training database. Each path has a different purpose, recipient, and retention question.</p>
      <p>iRobot says its iAdapt localisation camera does not record or share video or images. Its broader privacy policy separately discusses optional image collection from certain older connected robots with camera based navigation. Its obstacle review support material says captured review images are encrypted and visible through the customer account, and that iRobot cannot view them unless they are contributed to its image database. If they are not contributed, iRobot says the encrypted images are automatically deleted from its servers after 30 days. Those statements describe different features. Combining them into the blanket claim “the robot uploads camera footage” would be inaccurate.</p>
      <p>The useful audit is specific: does the device capture an image, keep it on the robot, upload it to an account, display it in the app, or share it for improvement? Can another person with account access see it? Does switching off image sharing leave obstacle avoidance intact? The answers should be visible at the point of consent and revisited after software updates.</p>
    </> },
    { id: 'inference', title: 'Why a map matters even without a photograph', content: <>
      <p>A floor plan can reveal the number and arrangement of rooms. A history of cleaning times can suggest occupancy patterns. Repeated detections can show where objects tend to be left. These are possible inferences from the data categories, not proof that iRobot makes or sells those inferences. The distinction matters: a credible privacy analysis describes what the data could expose and what the company states it does, without turning possibility into an allegation.</p>
      <p>The threat model has several actors. An intruder with account access may see app content. A cloud breach can expose stored records. A third party integration can add another data recipient if the resident opts in. A household member may be affected by a map even though someone else accepted the terms. A company also has legitimate operational reasons to inspect some data for debugging or customer service. Good access design limits each actor to the data needed for that purpose and records when access occurs.</p>
      <p>Privacy is therefore a system property, not a toggle hidden under settings. It depends on data minimisation, encryption, account protection, retention limits, deletion, and clear consent. Local processing can shrink the amount sent to a cloud service, but it can also make some cross device features harder to deliver. The trade-off should be made in product design, then communicated honestly.</p>
    </> },
    { id: 'lifecycle', title: 'Follow the map through its full lifecycle', content: <>
      <p>A useful way to audit the product is to follow one room label from creation to deletion. A resident names a space in the app. The name becomes linked to a map and an account. The service may use the pair to schedule cleaning and show history. A phone replacement, account transfer, or device resale can change the people with access to that record. Each transition is a point where a design needs an explicit rule.</p>
      <p>The engineering record should answer four questions: what exact fields are retained, where they are stored, how long they remain, and which event deletes them. A promise that data is encrypted answers only part of the security question. Access can still be granted to the wrong account, an old map can remain after a reset, or a backup can outlive the visible copy. The company’s published map deletion steps are useful, but a complete audit would verify the outcome in the system rather than assuming that a button press covers every copy.</p>
      <p>Product teams should test the difficult paths as carefully as the first setup: a shared household, a lost phone, a change of owner, a disconnected robot, and a request to remove a map. These are ordinary product events. Treating them as rare exceptions leaves the privacy design incomplete.</p>
    </> },
    { id: 'business', title: 'The business case for collecting less', content: <>
      <p>From a business analyst’s perspective, every new data field needs a measurable benefit. A detailed map may improve completion rate, reduce repeated cleaning, and support paid or premium features. It also adds storage, security, support, compliance, and incident response costs. A feature that raises engagement but erodes trust may have a poor lifetime value even when initial adoption looks strong.</p>
      <p>A sensible product experiment would compare two designs: cloud based room controls and a simpler mode with less data transmission. Measure cleaning success, setup completion, feature retention, support contacts, opt outs, and deletion requests. Report the results by device model. This is better than assuming that more information always improves the product. It also exposes a hidden failure: a privacy option that technically exists but makes the product unusable for the people most likely to choose it.</p>
      <p>Companies should not treat consent as a one time legal event. A new camera feature, partner integration, or map derived recommendation changes the original bargain. The user interface should explain the additional data flow before the feature is activated. A business that can demonstrate the value of each field and make reversal easy has a stronger basis for long term trust than one relying on an unread policy.</p>
      <p>The financial test is a margin calculation, not a collection target. Start with additional revenue or retention attributable to a mapping feature. Subtract cloud storage and compute, support, security operations, privacy engineering, and expected incident costs. Then compare that contribution with a mode that keeps less data. A large installed base can turn a small per household hosting cost into a material operating line; a single serious breach can impose costs that no engagement dashboard captures. The public documents cited here do not disclose a feature level profit figure, so a numerical profit claim would be invented.</p>
      <p>For procurement teams, the same analysis becomes a vendor questionnaire: can a device do its core job without an account, which functions require the cloud, how is a map deleted, and what happens when support ends? These questions matter to schools, offices, and care facilities as well as homes. They connect data governance to replacement cost and service continuity.</p>
    </> },
    { id: 'decision', title: 'What a household can actually decide', content: <>
      <p>Before connecting a robot, check whether room targeting is important enough to justify cloud mapping for that model. Review image collection separately from navigation. Use a strong, unique account password and any available multifactor protection. Check which household members have app access. Delete maps that are no longer needed using the product’s own procedure rather than assuming app removal is enough.</p>
      <p>The FTC recommends keeping connected devices updated and securing the home router. Those basic controls matter because the vacuum is one member of a larger home network. The final question is not whether a smart home can be made risk free. It is whether each feature earns the data it asks to keep. A useful machine should leave the household informed and in control of that decision.</p>
    </> },
  ],
  sources: [
    { label: 'Pew Research Center, Americans and AI 2026, smart home survey', href: 'https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/' },
    { label: 'iRobot privacy policy and device data categories', href: 'https://www.irobot.com/en_US/legal/privacy-policy.html' },
    { label: 'iRobot, Imprint Smart Maps storage and opt out guidance', href: 'https://homesupport.irobot.com/articles/en_US/Knowledge/17752' },
    { label: 'iRobot, deleting a Smart Map', href: 'https://homesupport.irobot.com/articles/en_US/Knowledge/64102' },
    { label: 'iRobot, iAdapt localisation camera', href: 'https://homesupport.irobot.com/s/article/9001' },
    { label: 'iRobot, obstacle image review', href: 'https://homesupport.irobot.com/articles/en_US/Knowledge/31163' },
    { label: 'US Federal Trade Commission, securing connected devices', href: 'https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home' },
  ],
};
