import { Promoter_Or_Management } from "../share/metricSection/metricSection";
import { FaLinkedin } from "react-icons/fa"; // Add this import for the LinkedIn icon

interface PromoterProps {
  data: Promoter_Or_Management[];
}

export default function PromoterGrid({ data }: PromoterProps) {
  return (
    <div>
      <div className="h3">Promoters or Management</div>
      <div>
        <div className="overflow-x-auto my-10">
          <table className="grid-table rounded-md">
            <thead>
              <tr>
                <th className="text-left py-2 px-4">Name</th>
                <th className="text-left py-2 px-4">Designation</th>
                <th className="text-left py-2 px-4">Experience</th>
                <th className="text-left py-2 px-4">LinkedIn Profile</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{item.Name}</td>
                  <td className="py-2 px-4">{item.Designation}</td>
                  <td className="py-2 px-4">{item.Experience}</td>
                  <td className="py-2 px-4">
                    <a href={item?.Linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <FaLinkedin className="mr-2 text-blue-500" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
