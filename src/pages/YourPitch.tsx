
import React from 'react';
import { Link } from 'react-router-dom';
import VideoEmbed from '../components/VideoEmbed';

const YourPitch = () => {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      {/* Elevator Hook */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-vault-primary">
        Australia's sovereign cloud is only as strong as its innovators—here's how Troy builds that strength.
      </h1>

      {/* Video Intro */}
      <VideoEmbed
        src="https://loom.com/embed/your-30sec-intro"
        caption="Watch Troy's 30‑second pitch"
        className="mb-8"
      />

      {/* 2‑Line Bio + Key Wins */}
      <p className="text-lg text-vault-secondary mb-4">
        I'm Troy Latter—a technology leader with 15 years driving sovereign‑grade AI, security and infrastructure
        programs at AWS, Unisys and Oracle across APAC.
      </p>
      
      <ul className="list-disc list-outside ml-5 text-vault-secondary mb-8 space-y-2">
        <li>Delivered an ASD‑certified Government Cloud enclave in 4 months, template for all future sovereign launches.</li>
        <li>Built a Rapid‑Start PoC framework that cut time‑to‑demo from 10 weeks to 48 hrs, unlocking $4M follow‑on funding.</li>
        <li>Automated compliance pipelines reducing audit prep from 2 weeks to &lt;1 hr, saving agencies $2M+ in effort.</li>
      </ul>

      {/* Call to Action */}
      <div className="text-center">
        <Link 
          to="/you" 
          className="inline-block bg-vault-accent text-white px-6 py-3 rounded-lg hover:bg-vault-accent/90 transition font-medium"
        >
          Explore My Skills & Experience
        </Link>
      </div>
    </div>
  );
};

export default YourPitch;
