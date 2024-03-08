export default function Node({ name, children }) {
  return (
    <div>
      <div className="node">{name}</div>
      {children && (
        <div className="children">
          {children.map((child, index) => (
            <Node key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
}
