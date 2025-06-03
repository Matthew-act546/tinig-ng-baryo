import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { db, auth } from "../../../config/firebase";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { collection,  getDocs, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function HomeAuthen() {
  const [query, setQuery] = useState("");
  const [baryos, setBaryos] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchBaryos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "baryos"));
        const baryoList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBaryos(baryoList);
      } catch (error) {
        console.error("Error fetching baryos:", error);
      }
    };

    fetchBaryos();
  }, []);

  const handleJoin = async (baryoId) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first.");
      return;
    }

    try {
      const baryoRef = doc(db, "baryos", baryoId);
      const userRef = doc(db, "users", user.uid);

      // Add user to baryo members
      await updateDoc(baryoRef, {
        members: arrayUnion(user.uid),
      });

      // Save the joined baryo ID to user's document
      await updateDoc(userRef, {
        joinedBaryo: baryoId,
      });

      // Redirect to that baryo
      navigate(`/baryo/${baryoId}`);
    } catch (error) {
      console.error("Error joining baryo:", error);
    }
  };

  

  const currentUserId = auth.currentUser?.uid || "";

  return (
    <>
      <div>
        <div className="mx-auto" style={{ marginTop: "100px", width: "80%" }}> 
          <TextField
            label="Search"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <h1 className="text-center mt-5">Welcome to Tinig ng Baryo</h1>
          <p className="text-center">Sumali na kayo sa inyong mga baryo!</p>
        </div>

        <div className="bg-secondary" style={{ marginTop: "40px", padding: "20px" }}>
          <div className="container">
            <div className="row">
              {baryos
                .filter((baryo) =>
                  (baryo.name || "").toLowerCase().includes(query.toLowerCase())
                )
                .map((baryo) => (
                  <div className="col-md-4 mb-4" key={baryo.id}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={baryo.coverImageUrl || "https://via.placeholder.com/150"}
                        alt={baryo.name}
                      />
                      <Card.Body>
                        <Card.Title>{baryo.name}</Card.Title>
                        <Card.Text>
                          {baryo.description}
                          <br />
                          <b>Address:</b> {baryo.address}, {baryo.city}
                        </Card.Text>
                        <Button
                          variant={baryo.members?.includes(currentUserId) ? "success" : "primary"}
                          onClick={() =>
                            baryo.members?.includes(currentUserId)
                              ? navigate(`/baryo/${baryo.id}`)  // corrected path here
                              : handleJoin(baryo.id)
                          }
                        >
                          {baryo.members?.includes(currentUserId) ? "Go to Baryo" : "Join now"}
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAuthen;
