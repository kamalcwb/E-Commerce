import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Registra três observadores:
    // 1. observador 'state_changed', chamado sempre que o estado muda
    // 2. Observador de erro, chamado em caso de falha
    // 3. Observador de conclusão, chamado após conclusão bem-sucedida
    uploadTask.on(
      "state_changed",
      (snapshot) => {

        // Observe os eventos de mudança de estado, como progresso, pausa e retomada
        // Obtém o progresso da tarefa, incluindo o número de bytes carregados e o número total de bytes a serem carregados
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload pausado");
            break;
          case "running":
            console.log("Fazendo upload");
            break;
          default:
        }
      },
      (error) => {
        // Uploads malsucedidos
      },
      () => {

        // Uploads bem-sucedidos
        // Por exemplo, use a URL de download: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Novo produto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagem</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Titulo</label>
          <input
            name="title"
            type="text"
            placeholder="Airpods Apple"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Descrição</label>
          <input
            name="desc"
            type="text"
            placeholder="descrição..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Preço</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categoria</label>
          <input type="text" placeholder="jeans,camisetas" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Estoque</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Criar
        </button>
      </form>
    </div>
  );
}
