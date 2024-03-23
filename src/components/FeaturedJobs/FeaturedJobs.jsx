import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs]= useState([])

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className="max-w-6xl mx-auto my-20">
            <div className="text-center mb-10">
                <h2 className="text-4xl">Featured Jobs {jobs.length}</h2>
                <p className="text-base">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid  md:grid-cols-2 gap-6">
                {
                    jobs.map(job => <FeaturedJob job={job} key={job.id} ></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;