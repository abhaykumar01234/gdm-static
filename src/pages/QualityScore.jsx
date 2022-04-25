import React from "react";

const QualityScore = () => {
  return (
    <>
      <h1>Quality Score</h1>
      <p>
        Digital Markets is introducing a Quality Score measure as a component of
        our PPC campaign ranking logic, which will be implemented across our
        auctions on a rolling basis.
      </p>
      <h2>How Quality Score works:</h2>
      <p>
        Software products are ranked by a combination of their bid and quality
        score to ensure that buyers see the most relevant solutions for their
        needs, which increases the quality of the traffic vendors receive.
      </p>
      <h2>What goes into Quality Score:</h2>
      <p>Quality Score consists of three core components:</p>
      <ol>
        <li>Expected click-through rate</li>
        <li>Profile quality and completeness</li>
        <li>Product relevance to the category and buyer</li>
      </ol>
      <p>
        <strong>Expected click-through</strong> rate predicts the likelihood a
        buyer will engage with a product. This is based on the product’s
        historical traffic and specific buyer signals within the category.
      </p>
      <p>
        <strong>Profile quality and completeness</strong> favors strong product
        profiles. When buyers see profiles with complete data and relevant copy
        that speaks to their needs, they make more informed decisions regarding
        product fit. In turn, more educated buyers have a greater likelihood of
        becoming well-qualified leads.
      </p>
      <p>
        <strong>Product relevance to the category and buyer</strong> maintains
        the integrity of the Digital Markets product catalog. Products that are
        a poor or partial fit for a category may have lower quality scores.
      </p>
      <h2>How Quality Score impacts Cost-Per-Click (CPC):</h2>
      <p>
        Actual CPC is the amount paid for a click. A vendor will only pay the
        minimum CPC needed to outrank the next-highest competitor. Vendors will
        never be charged more than their bid, and often pay less than their
        actual bid amount.
      </p>
      <p>
        Product position and CPC are impacted by the combination of bid and
        Quality Score. This means that it will cost less for vendors with
        stronger Quality Scores to achieve higher positions than vendors with
        poor Quality Scores.
      </p>
      <h2>How to influence your Quality Score:</h2>
      <p>
        The best way to set up your product for success is by establishing a
        complete profile with high-quality content tailored for your target
        audience.
      </p>
      <p>We recommend the following actions: </p>
      <ul>
        <li>
          List your product in the categories that best align with your product
          functionality
        </li>
        <li>
          Use profile description copy that is highly relevant for your
          category—see <a href="/">our guide</a> for product profile best
          practices
        </li>
        <li>Ensure your Conversion Tracking code is properly installed</li>
        <li>Optimize your landing page</li>
        <li>Collect reviews often from your buyers</li>
      </ul>
      <p>
        Quality score includes signals of buyer behavior, which a complete,
        tailored and relevant profile will help support. By ensuring the best
        experience for buyers to engage with your product profile, you can
        influence an improvement in your score, but the above changes cannot
        guarantee improvement.
      </p>
      <p>
        If you have questions about your profile, contact your{" "}
        <a href="/">account representative</a>.
      </p>
      <h2>How to check your Quality Score:</h2>
      <p>
        Digital Markets will be launching to new categories on a rolling basis.
        The Quality Score Indicator provides an approximation of your score for
        the purpose of understanding how your products are performing. The
        Indicator ranges from 1 to 10, with 10 being the highest score. The
        Indicator is a reflection of a product’s quality and competitiveness
        across the range of buyers that visit a page.
      </p>
      <p>
        Discover your Quality Score Indicator within your bid editing experience
        in categories and countries utilizing Quality Score.
      </p>
      <p>
        For questions about Quality Score, please contact
        <a href="mailto:qualityscore@gartner.com">qualityscore@gartner.com</a>.
      </p>
    </>
  );
};

export default QualityScore;
