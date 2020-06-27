import React from 'react';
//import Button from '@material-ui/core/Button';
import Button from './Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
const QuoteMachine=({assignNewQuoteIndex, selectedQuote, selectedColorIndex})=>(

<Card>
    <CardContent>
      <p id="text" style={{color:colors[selectedColorIndex]}}>
        {selectedQuote.quote}-<span id="author">{selectedQuote.author}</span>
      </p>     
    </CardContent>
    <CardActions>
      <Button id="new-quote" size="small" buttonDisplayName="Next Quote" clickHandler={assignNewQuoteIndex} color={colors[selectedColorIndex]} ></Button> 
      <IconButton
       id="tweet-quote"
       target="_blank"
       href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`}
      >
        <FontAwesomeIcon color={colors[selectedColorIndex]} icon={faTwitter} size='sm'></FontAwesomeIcon>
      </IconButton>
    </CardActions>
</Card>
);

export default QuoteMachine