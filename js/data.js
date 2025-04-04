// Clinic Data
const clinicData = {
  name: "MOTION MITRA",
  tagline: "Physiotherapy and Wellness clinic",
  doctorName: "Dr. Suresh Patel",
  address: "Office no.-607, Phoenix Co-Hsg Soc Ltd, 457 SVP Road, DD Sathe Marg, Girgaon (Charni Road East), Mumbai-400004",
  phone: ["+91 9929893030"],
  email: ["motionmitraphysiotherapy25@gmail.com"],
  workingHours: {
    weekdays: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "10:00 AM - 4:00 PM",
  },
  socialMedia: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
};

// Services Data
const servicesData = [
  {
    id: 1,
    icon: "walking",
    title: "Orthopedic Rehabilitation",
    description:
      "Specialized treatment for injuries and conditions affecting bones, joints, ligaments, tendons, and muscles.",
  },
  {
    id: 2,
    icon: "heartbeat",
    title: "Sports Injury Treatment",
    description:
      "Specialized care for athletes and active individuals to recover from sports-related injuries and improve performance.",
  },
  {
    id: 3,
    icon: "brain",
    title: "Neurological Rehabilitation",
    description:
      "Treatment for patients with neurological conditions such as stroke, multiple sclerosis, and Parkinson's disease.",
  },
  {
    id: 4,
    icon: "child",
    title: "Pediatric Physiotherapy",
    description:
      "Gentle and effective physical therapy techniques specifically designed for infants, children, and adolescents.",
  },
  {
    id: 5,
    icon: "wheelchair",
    title: "Geriatric Physiotherapy",
    description:
      "Specialized care for elderly patients focusing on mobility, strength, balance, and overall quality of life.",
  },
  {
    id: 6,
    icon: "hands",
    title: "Manual Therapy",
    description:
      "Hands-on techniques to reduce pain, decrease restriction, mobilize joints, and improve flexibility and movement.",
  },
];

// Team Data
const teamData = [
  {
    id: 1,
    name: "Dr. Suresh Patel",
    position: "Director & Head Physiotherapist",
    description:
      "Founder of Motion Mitra, specializing in comprehensive physiotherapy and wellness solutions",
    imageUrl: "../assets/doctor.jpeg",
  },
  // },
  // {
  //   id: 2,
  //   name: "Dr. Ananya Sharma",
  //   position: "Senior Physiotherapist",
  //   description: "Specializes in Orthopedic Rehabilitation with 12+ years of experience",
  //   imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  // },
  // {
  //   id: 3,
  //   name: "Dr. Priya Singh",
  //   position: "Neurological Specialist",
  //   description: "Focused on Neurological Rehabilitation and Recovery",
  //   imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  // }
];

// Testimonials Data
const testimonialsData = [
  {
    id: 1,
    name: "Sushmita Vatsh",
    position: "",
    testimonial:
      "I consulted Doctor for my mom and he is one of the best when it comes to dealing patient with patience and in terms of results as well. He has been so kind and supportive even post sessions. Highly recommended from my end. ",
    imageUrl: "../assets/female.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Trishna Gunderia",
    position: "",
    testimonial:
      "Dr Suresh has compassionate approach towards patient. His down-to-earth nature and unwavering support make each session not only effective but also uplifting.",
    imageUrl: "../assets/female.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Nimish Chodankar",
    position: "",
    testimonial:
      "My Father was on walker post his cervical spine surgery, Dr Suresh has helped him in transition from walker to stick. Dr Suresh has been very helpful and highly recommended physio doctor. Thank you very much for your services.",
    imageUrl: "../assets/male.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Avinash Surve",
    position: "",
    testimonial:
      "If you are looking for genuine Doctor and consultation with good practice in field, he is the man for you. We recently had an engagement with Dr. Suresh for my father's neurological case and his physio therapy sessions helped him recover in time. Highly recommended.",
    imageUrl: "../assets/male.png",
    rating: 5,
  },
];
