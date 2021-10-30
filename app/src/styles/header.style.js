import styled from "styled-components";



const HeadStyle = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:55% 45%;
    margin:0 0rem;
    height:25rem;
    .head-section{
        .image-section{
            
            .head-background{
                position:absolute;
                top:0;
                left:0;
                width:55%;
                
        }
        
        }
        .nav-bar{
            margin:2.5rem 3rem;
            display:inline-flex;
            justify-content:space-around;
            position:absolute;
            top:-1rem;
            left:2rem;
            .logo-name{
                padding:.6rem 0em;
                color:#fff;
                font-weight:600;
            }
            .list{
                display:inline-flex;
                list-style:none;
                .listed-item{
                  margin:0rem 1rem;  
                  cursor:pointer;
                  padding:.6rem 0em;
                  color:#fff;
                  &:hover{
                    border-bottom:4px solid #fff;
                  }
                }
            }
        }
    }
    .main-section{
        margin:5rem auto;
        width:80%;
        .shop-text{
            width:50%;
            display:flex;
            .text{
                text-transform:capitalize;
                padding:.3rem .5rem;
            }
            .img{
                padding:.3rem .5rem;
            }
        }


    }
    .button-section{
        
        .btn{
            height:5rem;
            width:5rem;
            
            
            background-color:#000;
            border: 2px solid #000;
            color:white;
            &:hover{
                background-color:hsl(0, 0%, 27%);
                border: 2px solid hsl(0,0%, 27%);
            }
    }
   

    }








    @media screen and (max-width: 500px) {
    .head-section{
        
    }
    }    
`
 
export default HeadStyle;