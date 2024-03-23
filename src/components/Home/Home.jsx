import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomeBanner from "../HomeBanner/HomeBanner";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;