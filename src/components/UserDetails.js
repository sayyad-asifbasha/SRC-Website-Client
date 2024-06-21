import { React } from "react";
import "../styles/Login.css";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
export default function UserDetails() {
    const formik = useFormik({
        initialValues: {
            username: "",
            leetcode: "",
            gfg:"",
            hackerrank:"",
            github:"",
            linkedin:""
        },
        validate: (values) => {
            let errors = {};
            if (values.username !== "") {
                document.getElementById("username").classList.add("filled");
            } else {
                document.getElementById("username").classList.remove("filled");
            }
            if (values.leetcode !== "") {
                document.getElementById("leetcode").classList.add("filled");
            } else {
                document.getElementById("leetcode").classList.remove("filled");
            }
            if (values.gfg !== "") {
                document.getElementById("gfg").classList.add("filled");
            } else {
                document.getElementById("gfg").classList.remove("filled");
            }
            if (values.hackerrank !== "") {
                document.getElementById("hackerrank").classList.add("filled");
            } else {
                document.getElementById("hackerrank").classList.remove("filled");
            }
            if (values.github !== "") {
                document.getElementById("github").classList.add("filled");
            } else {
                document.getElementById("github").classList.remove("filled");
            }
            if (values.linkedin !== "") {
                document.getElementById("linkedin").classList.add("filled");
            } else {
                document.getElementById("linkedin").classList.remove("filled");
            }
            return errors;
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formik.values);
    };
    return (
        <>
            <div id="background"></div>
            <div id="card">
                <img
                    src="https://media.licdn.com/dms/image/D560BAQGeX5IypKPgKA/company-logo_200_200/0/1714503367832/src_rgukt_rkvalley_logo?e=2147483647&v=beta&t=VaD731Pnd5Lt2gtyglJxyOJwUvjsOATqQCeXi6k-qS0"
                    alt=""
                    id="loginLogo"
                />
                <h2>Details</h2>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="inputBox detailsBox">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="username" className="labels detail-label">
                            Username
                        </label>
                    </div>
                    <div className="inputBox detailsBox">
                        <input
                            type="text"
                            name="leetcode"
                            id="leetcode"
                            required
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="leetcode" className="labels detail-label">
                        Leetcode
                        </label>
                    </div>
                    <div className="inputBox detailsBox">
                        <input
                            type="text"
                            name="gfg"
                            id="gfg"
                            required
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="gfg" className="labels detail-label">
                        Geeks for Geeks
                        </label>
                    </div>
                    <div className="inputBox detailsBox">
                        <input
                            type="text"
                            name="hackerrank"
                            id="hackerrank"
                            required
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="hackerrank" className="labels detail-label">
                            Hacker Rank
                        </label>
                    </div>
                    <div className="inputBox detailsBox">
                        <input
                            type="text"
                            name="github"
                            id="github"
                            required
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="github" className="labels detail-label">
                        Github
                        </label>
                    </div>
                    <div className="inputBox detailsBox detail-label">
                        <input
                            type="text"
                            name="linkedin"
                            id="linkedin"
                            required
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="linkedin" className="labels detail-label">
                        Linked In
                        </label>
                    </div>
                    
                    <button type="submit" className="details-submit detail-label">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
