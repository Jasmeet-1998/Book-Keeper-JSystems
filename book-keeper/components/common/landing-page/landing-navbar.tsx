import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../../styles/index';
import { navVariants } from '../animations/landing_page.animations';
import { RiBookMarkFill } from 'react-icons/ri';
import { IconButton } from '@chakra-ui/react';
import { FcLink } from 'react-icons/fc';
import { AiOutlineLink } from 'react-icons/ai';

const LandingNavbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className="absolute w-[100%] inset-0 gradient-01" />
            <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
            <a href="/user/login">
                <IconButton display={"inline"} as={RiBookMarkFill} size="xs" bgColor="whiteAlpha.50" color="purple.300" _hover={{bgColor: "inherit", color:"yellow.400"}}  aria-label={'login'}></IconButton>
            </a>
                <h2 className="font-extrabold text-[24px] leading-[30px] text-white" >
                    KEEPER.
                </h2>
            <a href="https://github.com/Jasmeet-1998" target="_blank">
                <IconButton display={"inline"} as={AiOutlineLink} size="xs" bgColor="whiteAlpha.50" color="purple.300" _hover={{bgColor: "inherit", color:"yellow.400"}} aria-label={'founder'}></IconButton>
            </a>
            </div>
            
        </motion.nav>
    )
}

export default LandingNavbar;

