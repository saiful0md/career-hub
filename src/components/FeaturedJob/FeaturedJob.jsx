import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";



const FeaturedJob = ({ job }) => {
    const { logo, job_title, company, job_type, remote_or_onsite, location, salary } = job
    return (
        <div className=" bg-base-100 shadow-xl flex flex-col gap-4">
            <figure className="px-10 pt-10">
                <img src={logo} alt={`Logo from ${job_title}`} className="rounded-xl" />
            </figure>
            <div className="card-body gap-4 ">
                <h2 className="card-title">{job_title} </h2>
                <p>{company}</p>
                <div className="flex gap-3">
                    <button className="btn btn-outline btn-primary">{job_type}</button>
                    <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                </div>
                <div className="flex gap-7">
                    <div className="flex gap-2 items-center">
                        <CiLocationOn></CiLocationOn>
                        <span>{location}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
                        <span>{salary}</span>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn text-white bg-gradient-to-r from-indigo-500  to-blue-500">View Details</button>
                </div>
            </div>
        </div>
    );
};
FeaturedJob.propTypes = {
    job: PropTypes.object
}

export default FeaturedJob;