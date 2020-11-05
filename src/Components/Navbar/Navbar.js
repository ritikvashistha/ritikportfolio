import React, { useState } from 'react';

import "./Navbar.scss"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Navbar() {

    const [nav, setnav] = useState("navbar sticky");
    const [menuBtn, setMenubtn] = useState("icon menu-btn");

    function menu() {
        setnav("navbar sticky show")
        setMenubtn("icon menu-btn hide")
    }
    function cancel() {
        setnav("navbar sticky")
        setMenubtn("icon menu-btn")
    }


    // const body = document.querySelector("body");
    // const navbar = document.querySelector(".navbar");
    // const menuBtn = document.querySelector(".menu-btn");
    // const cancelBtn = document.querySelector(".cancel-btn");
    // menuBtn.onClick = () => {
    //     navbar.classList.add("show");
    //     menuBtn.classList.add("hide");
    //     body.classList.add("disabled");
    // }
    // cancelBtn.onClick = () => {
    //     body.classList.remove("disabled");
    //     navbar.classList.remove("show");
    //     menuBtn.classList.remove("hide");
    // }
    // window.onscroll = () => {
    //     this.scrollY > 20 ? setnav("navbar sticky") : setnav("navbar");
    // }


    return (
        <div >

            <nav className={nav}  >
                <div className="content">
                    <div className="logo">
                        <a href="#">RV</a>
                    </div>
                    <ul className="menu-list">
                        <div className="icon cancel-btn">
                            <ImCross onClick={() => cancel()} />
                        </div>
                        <li><a onClick={() => cancel()} href="#">Home</a></li>
                        <li><a onClick={() => cancel()} href="#about">About</a></li>
                        <li><a onClick={() => cancel()} href="#projects">Projects</a></li>
                        <li><a onClick={() => cancel()} href="#skills">Skills</a></li>
                        <li><a onClick={() => cancel()} href="#contact">Contact</a></li>
                    </ul>
                    <div className={menuBtn}>
                        <FaBars onClick={() => menu()} />
                    </div>

                </div>
            </nav>

        </div>

    );
}



// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,

//     },
//     roots: {
//         flexGrow: 1,
//         background: '#202020fd',
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//         fontFamily: 'Raleway',
//         color: '#4EE2EC'
//     },
// }));

// export default function Navbar() {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <div className={classes.root}>
//             <AppBar position="static" className={classes.roots}>
//                 <Toolbar>
//                     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Menu
//                         id="simple-menu"
//                         anchorEl={anchorEl}
//                         keepMounted
//                         open={Boolean(anchorEl)}
//                         onClose={handleClose}
//                         className="Menu-set"
//                     >

//                         <MenuItem className="Menuitem-div" onClick={handleClose}>Profile</MenuItem>
//                         <MenuItem onClick={handleClose}>My account</MenuItem>
//                         <MenuItem onClick={handleClose}>Logout</MenuItem>
//                     </Menu>

//                     <Typography variant="h7" className={classes.title} >
//                         <Box fontStyle="italic" m={1}>
//                             const love = {"{ programming }"}
//                         </Box>

//                     </Typography>
//                     {/* <Button color="inherit">Login</Button> */}
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }