import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setMenu]=useState([]) //আমাদের ডাটা হচ্ছে array of object so by default কোন ডাটা থাকবে না empty একটা ‍array হবে।
    const [loading, setLoading]=useState(true)
    // যখন কেউ কল করবে loading state চালু হয়ে যাবে। ডাটা লোডিংয়ের জন্য।
    console.log(menu);
    useEffect( ()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {setMenu(data)
            setLoading(false)
        }
            //setMenu(data.filter(item => item.category === 'popular'))
            // এখানে শুধু popular গুলোকে পাচ্ছিলাম, এটা করলে custom hook এর উদ্দেশ্য সাধন হবে না। প্রথমে menu এর সর ডাাটা পাইতে হবে। popular এর জন্য popularMenu page এ যেয়ে set করবো।
        )
        // .catch(error=> console.log(error))
        
    } ,[])
    return [menu, loading] // কোন জিনিসটা লোকজন পাবে/আমরা use করতে পারবো, সেটা return করে দিতে হবে। একাধিক  জিনিস যদি return করতে হয় তাহলে array হিসেবে return করতে পারি। যে ফাংশনটা call করবে সে দুইটা জিনিস পাবে menu, loading এর state, যে loading টা হইছে নাকি শেষ হইছে এই টাইপের বিষয়।
};

export default useMenu;