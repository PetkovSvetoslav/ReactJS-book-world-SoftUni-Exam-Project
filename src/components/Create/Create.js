
import { create } from "../../services/booksService";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Create = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const createHandler = async (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        const data = {
            name : formData.get('name'),
            description : formData.get('description'),
            imageUrl : formData.get('imageUrl'),
            type : formData.get('type'),
        }
        await create(data, user.accessToken);
        navigate('/');
    }

    return (
        <section id="create-page"className="create">
            <form id="create-form" onSubmit={createHandler}  method="post">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Description"
                            ></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input
                                type="text"
                                name="imageUrl"
                                id="image"
                                placeholder="Image"
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="history">History</option>
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="learn">Learn</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input
                        className="button submit"
                        type="submit"
                        value="Add Book"
                    />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;
