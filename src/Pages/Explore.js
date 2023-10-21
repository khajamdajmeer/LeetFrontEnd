import React, { useRef, useState } from 'react';
import ExploreCard from '../Components/ExploreCard';
import Footer from '../Components/Footer'
import img1 from '../Resources/Images/ExploreImg/dsa.jpg';
import img2 from '../Resources/Images/ExploreImg/dsa2.jpg';
import img3 from '../Resources/Images/ExploreImg/dsa3.jpg';
import img4 from '../Resources/Images/ExploreImg/dsa4.jpg';
import img5 from '../Resources/Images/ExploreImg/dsa5.jpg';
import ex1 from '../Resources/Images/ExploreImg/Ex1.jpeg';
import ex2 from '../Resources/Images/ExploreImg/ex2.jpeg';
import ex3 from '../Resources/Images/ExploreImg/ex3.jpg';
import ex4 from '../Resources/Images/ExploreImg/ex4.jpg';
import ex5 from '../Resources/Images/ExploreImg/ex5.jpeg';
import ex6 from '../Resources/Images/ExploreImg/ex6.jpeg';

const Explore = () => {

  const FeatureData = [{
    title: 'The LeetCode Beginers Guide', chapter: 4, items: 17, image: img1
  },
  { title: 'Data Structures and Algorithm', chapter: 13, items: 143, image: img2 },
  { title: 'System Design for Interviews and Beyond', chapter: 16, items: 81, image: img3 },
  { title: 'Top Interview Question', chapter: 9, items: 48, image: img4 },
  { title: 'Dynamic Programming', chapter: 6, items: 55, image: img1 },
  { title: 'Arrays 101', chapter: 6, items: 31, image: img5 },
  { title: 'Google Interview', chapter: 9, items: 85, image: img2 },
  { title: 'Graph', chapter: 6, items: 58, image: img3 },
  { title: 'Heap', chapter: 4, items: 28, image: img1 },
  { title: 'SQL Language', chapter: 4, items: 36, image: img5 },
  { title: 'Recursion I', chapter: 5, items: 212, image: img2 },
  ]
  const IterviewData = [
    { title: 'Arrays 101', chapter: 6, items: 31, image: ex1 },
    {title: 'The LeetCode Beginers Guide', chapter: 4, items: 17, image: ex2},
  { title: 'System Design for Interviews and Beyond', chapter: 16, items: 81, image: ex3 },
  { title: 'Dynamic Programming', chapter: 6, items: 55, image: ex4 },
  { title: 'Data Structures and Algorithm', chapter: 13, items: 143, image: ex5 },
  { title: 'Graph', chapter: 6, items: 58, image: ex1 },
  { title: 'Top Interview Question', chapter: 9, items: 48, image: ex3 },
  { title: 'Recursion I', chapter: 5, items: 212, image: ex2 },
  { title: 'Heap', chapter: 4, items: 28, image: ex5 },
  { title: 'Google Interview', chapter: 9, items: 85, image: ex6 },
  { title: 'SQL Language', chapter: 4, items: 36, image: ex4 },
  ]

  const FeatureScrollRef = useRef(null);
  const [FeatureScrollPostion, setFeatureScrollPostion] = useState(0);
  const scrollstep = 300;
  const handleFeatureNextScroll = () => {
    if (FeatureScrollRef.current) {
      const FeatureContainter = FeatureScrollRef.current;
      setFeatureScrollPostion(FeatureScrollPostion + scrollstep);
      if (FeatureScrollPostion >= FeatureContainter.scrollWidth) {
        setFeatureScrollPostion(0);
      }
      FeatureContainter.scrollLeft = FeatureScrollPostion;
    }
  }
  const handleFeaturePrevScroll = () => {
    if (FeatureScrollRef.current) {
      const FeatureContainter = FeatureScrollRef.current;
      setFeatureScrollPostion(FeatureScrollPostion - scrollstep);
      if (FeatureScrollPostion <= 0) {
        setFeatureScrollPostion(0);
      }
      FeatureContainter.scrollLeft = FeatureScrollPostion;
    }

  }

  const InterviewScrollRef = useRef(null);
  const [InterviewScrollPostion,setInterviewScrollPostion]=useState(0);
  const handleInterviewNextScroll = ()=>{
    if (InterviewScrollRef.current) {
      const InterviewContainer = InterviewScrollRef.current;
      setInterviewScrollPostion(InterviewScrollPostion + scrollstep);
      if (InterviewScrollPostion >= InterviewContainer.scrollWidth) {
        setInterviewScrollPostion(0);
      }
      InterviewContainer.scrollLeft = InterviewScrollPostion;
    }
  }

  const handleInterviewPrevScroll = ()=>{
    if (InterviewScrollRef.current) {
      const InterviewContainer = InterviewScrollRef.current;
      setInterviewScrollPostion(InterviewScrollPostion - scrollstep);
      if (InterviewScrollPostion <=0) {
        setInterviewScrollPostion(0);
      }
      InterviewContainer.scrollLeft = InterviewScrollPostion;
    }
  }


  return (
    <>
      <div className='container-fluid' >
        <div className="container p-5">
          <div className="">
            <h4 className='text-secondary'>Welcome to</h4>
            <div className="d-flex flex-wrap  justify-content-between">

              <h3>LeetCode Explore</h3>
              <div className="d-flex">
                <span class="material-symbols-outlined fs-1 fw-light text-secondary px-2">star</span>
                <span class="material-symbols-outlined fs-1 fw-light text-secondary px-2">schedule</span>
              </div>
            </div>
          </div>
          <div className='w-100 mb-5'>
            <h3 className='text-secondary pt-5'>Featured</h3>
            <div className="position-relative " >
              <button className='position-absolute btn btn-light d-flex p-2 top-50' onClick={handleFeaturePrevScroll}>
                <span class="material-symbols-outlined fs-1">
                  chevron_left
                </span>
              </button>
              <div ref={FeatureScrollRef} className='d-flex d-flex align-items-center h-auto overflow-x-auto explor-card-scroll' id='Featured-translate' style={{ transform: '' }}>
                {FeatureData.map((ele, index) => {
                  return (
                    <ExploreCard heading={ele.title} image={ele.image} chapter={ele.chapter} items={ele.items} />

                  )
                })}

              </div>
              <button className='position-absolute btn btn-light d-flex p-2 top-50 end-0' onClick={handleFeatureNextScroll}>
                <span class="material-symbols-outlined fs-1" style={{ transform: 'rotate(180deg)' }} >
                  chevron_left
                </span>
              </button>
            </div>
          </div>



          <div className='w-100 mb-5'>
            <h3 className='text-secondary pt-5'>Interview</h3>
            <div className="position-relative " >
              <button className='position-absolute btn btn-light d-flex p-2 top-50' onClick={handleInterviewPrevScroll}>
                <span class="material-symbols-outlined fs-1">
                  chevron_left
                </span>
              </button>
              <div ref={InterviewScrollRef} className='d-flex d-flex align-items-center h-auto overflow-x-auto explor-card-scroll' id='Featured-translate' style={{ transform: '' }}>
                {IterviewData.map((ele, index) => {
                  return (
                    <ExploreCard heading={ele.title} image={ele.image} chapter={ele.chapter} items={ele.items} />

                  )
                })}

              </div>
              <button className='position-absolute btn btn-light d-flex p-2 top-50 end-0' onClick={handleInterviewNextScroll}>
                <span class="material-symbols-outlined fs-1" style={{ transform: 'rotate(180deg)' }} >
                  chevron_left
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Explore;