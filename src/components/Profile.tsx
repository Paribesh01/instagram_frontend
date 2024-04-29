import { useState, useEffect } from "react";
import { useProfile } from "../hooks/useProfile";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { getProfile } = useProfile();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getProfile();
        setData(profileData);
      } catch (error) {
        // Handle error (e.g., redirect to login page or show error message)
        console.error("Error fetching profile:", error);
        navigate("/login");
      } finally {
        setLoading(false); // Update loading state regardless of success or failure
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run effect only once on mount

  if (!localStorage.getItem("token")) {
    navigate("/login");
    return null; // Prevent rendering anything else if not authenticated
  }

  // Render loading indicator if data is still being fetched
  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(data); // You can remove this once you're done testing

  return <h1>Profile</h1>; // Render profile content once data is loaded
}
