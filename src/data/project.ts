export interface Project {
  title: string
  description: string
  stack: string[]
}

export const projects: Project[] = [
  {
    title: "Budget Tracker Web Application",
    description:
      "Budget tracker with a Laravel/Sanctum REST API and a React/Tailwind frontend so you can log spend in under three taps and view quick pie-and-bar reports. Nightly backups to Spaces and auto-deploys via GitHub Actions.",
    stack: [
      "React",
      "Laravel",
      "Tailwind CSS",
      "DigitalOcean",
      "MySQL",
      "GitHub Actions",
    ],
  },
  {
    title: "Cloud-Hosted Minecraft Server",
    description:
      "Spun up an Ubuntu droplet, secured SSH & UFW firewall rules, then installed and fine-tuned a Java-based Minecraft server. Automated backups & restarts via Bash scripts and cron.",
    stack: ["DigitalOcean", "Ubuntu", "SSH", "Bash", "Cron"],
  },
  {
    title: "Eco-Track Energy Dashboard",
    description:
      "IoT-powered energy monitor with real-time sensor streams, ML-based usage predictions in Python (scikit-learn, TensorFlow), and interactive web UI in Node.js.",
    stack: ["IoT", "Node.js", "Python", "TensorFlow", "scikit-learn"],
  },
  {
    title: "Spotify Web App Testing",
    description:
      "Automated functional tests for the Spotify web app using Selenium (Python) and performance/load tests with JMeter. Documented results in IEEE format.",
    stack: ["Selenium", "Python", "JMeter"],
  },
]