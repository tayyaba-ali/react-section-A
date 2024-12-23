// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useState ,useEffect} from "react";
let login = false

function Post() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  });

  return <>{data.map((user) => {


    return(

        

        <Card key={user.id} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={user.avatar}
            alt="green iguana"
          />

          {(login==true?"logged in":"logged out")}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.email}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {user.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    //     <Card key={user.id} style={{ width: '18rem' }}>
    //     <Card.Img variant="top" src={user.avatar} />
    //     <Card.Body>
    //       <Card.Title>{user.email}</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
       
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>


    
    )
  })}</>;
}

export default Post;
