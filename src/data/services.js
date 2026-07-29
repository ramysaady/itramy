import {
  Activity,
  Bot,
  Boxes,
  Cable,
  Cloud,
  Cpu,
  Flame,
  HardDrive,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Lock,
  MessageSquare,
  Network,
  Rocket,
  Router,
  Server,
  ShieldCheck,
  Signal,
  Terminal,
  Users,
  Video,
  Wifi,
  Wrench,
  Zap,
} from 'lucide-react';

export const serviceCategories = [
  'All',
  'Networking',
  'Security',
  'Servers',
  'Automation',
];

export const services = [
  {
    icon: Router,
    title: 'MikroTik Configuration',
    description:
      'RouterOS setup, routing, queues and scripting tuned for stable throughput under real load.',
    category: 'Networking',
  },
  {
    icon: Network,
    title: 'ISP Network Design',
    description:
      'Core and distribution topology, IP planning and capacity design built to scale with subscribers.',
    category: 'Networking',
  },
  {
    icon: Wifi,
    title: 'Hotspot Systems',
    description:
      'Captive portals with branded login pages, voucher plans and per-user bandwidth control.',
    category: 'Networking',
  },
  {
    icon: Cable,
    title: 'PPPoE Servers',
    description:
      'Subscriber authentication, profile-based speed tiers and clean session accounting.',
    category: 'Networking',
  },
  {
    icon: Users,
    title: 'Radius & User Manager',
    description:
      'Centralised AAA with billing plans, usage limits and automated expiry handling.',
    category: 'Networking',
  },
  {
    icon: Cpu,
    title: 'OpenWRT',
    description:
      'Custom firmware builds, mesh configuration and package tuning for reliable edge devices.',
    category: 'Networking',
  },
  {
    icon: ShieldCheck,
    title: 'Network Security',
    description:
      'Hardening, segmentation and traffic inspection that stops threats before they spread.',
    category: 'Security',
  },
  {
    icon: Lock,
    title: 'VPN',
    description:
      'WireGuard, IPsec and OpenVPN tunnels for secure remote access and site-to-site links.',
    category: 'Security',
  },
  {
    icon: Flame,
    title: 'Firewall',
    description:
      'Layered rule sets, NAT policy and rate limiting documented so every rule has a purpose.',
    category: 'Security',
  },
  {
    icon: Layers,
    title: 'VLAN',
    description:
      'Clean layer-2 separation for staff, guests, voice and management traffic.',
    category: 'Networking',
  },
  {
    icon: Zap,
    title: 'Fiber Networks',
    description:
      'Fiber links, media conversion and uplink redundancy for high-capacity backbones.',
    category: 'Networking',
  },
  {
    icon: Signal,
    title: 'WiFi Optimization',
    description:
      'Site surveys, channel planning and roaming tuning that removes dead zones.',
    category: 'Networking',
  },
  {
    icon: Video,
    title: 'CCTV Networks',
    description:
      'Camera addressing, PoE budgeting and recorder access designed for continuous uptime.',
    category: 'Networking',
  },
  {
    icon: HardDrive,
    title: 'NAS Servers',
    description:
      'Shared storage with RAID protection, snapshots and scheduled offsite backups.',
    category: 'Servers',
  },
  {
    icon: Server,
    title: 'Windows Servers',
    description:
      'Active Directory, DNS, DHCP, file services and group policy built on solid foundations.',
    category: 'Servers',
  },
  {
    icon: Terminal,
    title: 'Linux Servers',
    description:
      'Hardened Debian and Ubuntu deployments, reverse proxies and containerised workloads.',
    category: 'Servers',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'AI-assisted workflows that handle reports, alerts and repetitive operational tasks.',
    category: 'Automation',
  },
  {
    icon: Lightbulb,
    title: 'Smart Home',
    description:
      'Reliable local-first automation for lighting, climate, access and energy monitoring.',
    category: 'Automation',
  },
  {
    icon: Boxes,
    title: 'IoT Solutions',
    description:
      'Sensor networks and gateways with secure telemetry and long-term data retention.',
    category: 'Automation',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Dashboards',
    description:
      'Live operational views that turn raw device data into decisions your team can act on.',
    category: 'Automation',
  },
  {
    icon: Activity,
    title: 'Monitoring Systems',
    description:
      'Proactive alerting on uptime, bandwidth and hardware health before users complain.',
    category: 'Automation',
  },
  {
    icon: Wrench,
    title: 'Network Troubleshooting',
    description:
      'Structured fault isolation with packet-level analysis and a written root-cause report.',
    category: 'Networking',
  },
  {
    icon: Cloud,
    title: 'Cloudflare Setup',
    description:
      'DNS, proxy, SSL, WAF and caching configured for speed and protection at the edge.',
    category: 'Security',
  },
  {
    icon: Rocket,
    title: 'Website Deployment',
    description:
      'Fast static and app hosting with CI deploys, custom domains and free SSL.',
    category: 'Automation',
  },
  {
    icon: MessageSquare,
    title: 'Technical Consulting',
    description:
      'Vendor-neutral advice on architecture, budgets and upgrade paths that fit your business.',
    category: 'Servers',
  },
];
