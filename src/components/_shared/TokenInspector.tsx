import React from "react";
import "./TokenInspector.css";

export interface TokenInspectorProps {
  /** Objeto de tokens/props relevantes para este componente (se muestra como JSON) */
  json: Record<string, unknown>;
  /** Contenido crudo del archivo .css del componente (importado con ?raw) */
  css: string;
  /** Código fuente TSX del componente (importado con ?raw), opcional */
  tsx?: string;
}

/**
 * Panel auxiliar que se agrega como story "Inspector" en cada componente,
 * para que los devs puedan ver de un vistazo el JSON de parámetros/tokens,
 * el CSS y (opcionalmente) el código React fuente, sin salir de Storybook.
 */
export const TokenInspector: React.FC<TokenInspectorProps> = ({ json, css, tsx }) => {
  return (
    <div className="cb-inspector">
      <section>
        <h4>JSON (parámetros / tokens)</h4>
        <pre>
          <code>{JSON.stringify(json, null, 2)}</code>
        </pre>
      </section>
      <section>
        <h4>CSS</h4>
        <pre>
          <code>{css}</code>
        </pre>
      </section>
      {tsx && (
        <section>
          <h4>React (TSX)</h4>
          <pre>
            <code>{tsx}</code>
          </pre>
        </section>
      )}
    </div>
  );
};

export default TokenInspector;
