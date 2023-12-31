import styles from "./Loading.module.css";

export default function Loading({
  largura,
  tamanho,
}: {
  largura: string | number;
  tamanho: string | number;
}) {
  return (
    <div
      className={`w-screen h-screen flex justify-center items-center bg-slate-300`}
    >
      <div
        className={styles.loadingSpinner}
        style={{ width: largura, height: tamanho }}
      ></div>
    </div>
  );
}
