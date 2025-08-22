export default function TeamPage() {
  const team = [
    { name: "Wesley Kuria", role: "Project Lead", img: "/placeholder.jpg" },
    { name: "Lizmarie Miranda", role: "Researcher", img: "/placeholder.jpg" },
    { name: "Safiya Abdulqadir", role: "Developer", img: "/placeholder.jpg" },
    { name: "Favour Ayiela", role: "Designer", img: "/placeholder.jpg" },
    { name: "Margaret Wangui", role: "Data Analyst", img: "/placeholder.jpg" },
    { name: "Abdinoor Mohamed", role: "Community Outreach", img: "/placeholder.jpg" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
