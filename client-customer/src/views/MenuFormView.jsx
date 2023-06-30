import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMenu,
  fetchCategories,
  findMenu,
  updateMenu,
} from "../store/actions/actionCreator";
import { useNavigate, Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function MenuFormView() {
  // local state
  const [form, setForm] = useState({
    name: "",
    categoryId: 0,
    price: "",
    description: "",
    imgUrl: "",
  });
  const [ingredient1, setIngredient1] = useState({
    name: "",
  });
  const [ingredient2, setIngredient2] = useState({
    name: "",
  });
  // global state
  const [isLoading, setIsLoading] = useState(true);
  const { menu } = useSelector((state) => {
    return state.menus;
  });
  const { categories } = useSelector((state) => {
    return state.categories;
  });
  // requirement
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  // function
  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function handleIngredient1(event) {
    setIngredient1({
      ...ingredient1,
      [event.target.name]: event.target.value,
    });
  }
  function handleIngredient2(event) {
    setIngredient2({
      ...ingredient2,
      [event.target.name]: event.target.value,
    });
  }

  function handleCreate(e) {
    e.preventDefault();
    if(ingredient1.name===''||ingredient2.name===''){
      Swal.fire({
        icon: 'error',
        title: `Error 400`,
        text: 'Ingredient is required'
      })
    } else {
      const arrayIngredients = [ingredient1, ingredient2];
      const payload = {
        item: form,
        ingredients: arrayIngredients,
      };
      if (id) {
        dispatch(updateMenu(id, payload));
      } else {
        dispatch(createMenu(payload));
      }
      navigate("/menu");
    }
  }
  // lifecycle
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchCategories())
      .then((result) => {
        if (id) {
          dispatch(findMenu(id))
          .then((result) => {
            setIsLoading(false);
          }).catch((err) => {
            console.log(err);
          });
        } else {
          setIsLoading(false);
        }
      }).catch((err) => {
        console.log(err);
      });
    } else {
      setForm({
        name: menu.name,
        categoryId: menu.categoryId,
        price: menu.price,
        description: menu.description,
        imgUrl: menu.imgUrl,
      });

      setIngredient1(menu.Ingredients[0]);
      setIngredient2(menu.Ingredients[1]);
    }
  }, [menu]);

  return (
    <>
      <div className="flex-grow  ml-48 my-20 px-2 ">
        <div className="mb-4 md:flex md:justify-between m-5 relative top-0">
          <div className="mb-4 md:mr-2 md:mb-0">
            <h2 className="font-bold text-xl">McDonald's Menu Form</h2>
          </div>
        </div>

        {!isLoading ? (
          <form action="" className="space-y-4 m-4">
            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={handleForm}
                value={form.name}
                className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                placeholder="Insert menu name here"
                type="text"
                name="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {id ? (
                <div>
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="categoryId"
                  >
                    Category
                  </label>

                  {form.categoryId ? (
                    <select
                      id="categoryId"
                      className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                      onChange={handleForm}
                      name="categoryId"
                      defaultValue={form.categoryId}
                    >
                      <option value={0} disabled>
                        -- Select Type --
                      </option>
                      {categories.map((category, index) => (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <h1>loading..</h1>
                  )}
                </div>
              ) : (
                <div>
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="categoryId"
                  >
                    Category
                  </label>
                  <select
                    id="categoryId"
                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                    onChange={handleForm}
                    name="categoryId"
                    defaultValue={0}
                  >
                    <option value={0} disabled>
                      -- Select Type --
                    </option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  onChange={handleForm}
                  value={form.price}
                  className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                  placeholder="Insert price here"
                  type="number"
                  name="price"
                />
              </div>
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="description"
              >
                Description
              </label>

              <textarea
                onChange={handleForm}
                value={form.description}
                className="border border-gray-400 w-full rounded-lg p-3 text-sm"
                placeholder="Insert menu description here"
                rows="8"
                name="description"
              ></textarea>
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="imgUrl"
              >
                Image Url
              </label>
              <input
                onChange={handleForm}
                value={form.imgUrl}
                className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                placeholder="Insert your image url here"
                type="text"
                name="imgUrl"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="ingredient1"
                >
                  Ingredient 1
                </label>
                <input
                  onChange={handleIngredient1}
                  value={ingredient1.name}
                  className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                  placeholder="Insert ingredient here"
                  type="text"
                  name="name"
                  // {menu.id?id=menu.id:id=''}
                />
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="data2"
                >
                  Ingredient 2
                </label>
                <input
                  onChange={handleIngredient2}
                  value={ingredient2.name}
                  className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                  placeholder="Insert ingredient here"
                  type="text"
                  name="name"
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={handleCreate}
                className="inline-block w-full m-1 rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Submit
              </button>
              <Link
                to="/menu"
                className="inline-block w-full m-1 rounded-lg bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Cancel
              </Link>
            </div>
          </form>
        ) : (
          <img
            className="w-full pl-60 scale-50"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt=""
          />
        )}
      </div>
    </>
  );
}

export default MenuFormView;
