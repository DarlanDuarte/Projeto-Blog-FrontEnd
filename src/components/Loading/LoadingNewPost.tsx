import styles from "./Loading.module.css";

export default function LoadingNewPost({
  largura,
  tamanho,
}: {
  largura: string | number;
  tamanho: string | number;
}) {
  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={styles.loadingSpinner}
        style={{ width: largura, height: tamanho }}
      ></div>
    </div>
  );
}
