import React from 'react';
import Head from 'next/head';
import StyleRPC from '../components/StyleRPC'
import Navbar from './Navbar';

class HeadRPC extends React.Component {

    
  

    render() {
        return(

            <div>
              
                <Head>
                
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="   crossorigin="anonymous"> </script>


<link rel="icon" href="/logo.ico" />

                </Head>
                

            
  
  <StyleRPC/>


            </div>
        )
    }
}

export default HeadRPC