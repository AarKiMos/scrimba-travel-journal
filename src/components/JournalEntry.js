import locationPin from "../images/location-pin.png"

export default function JournalEntry(props) {
    return (
        <div className="journal-entry">
            <img src={props.obj.imageUrl} alt="" className="journal-entry-image" />
            <div className="journal-entry-details">
                <div className="journal-entry-location">
                    <img src={locationPin} alt="location pin" />
                    <span>{props.obj.location.toUpperCase()} </span>
                    <a href={props.obj.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="journal-entry-title">
                    {props.obj.title}
                </div>
                <div className="journal-entry-date">
                    {props.obj.startDate} - {props.obj.endDate}
                </div>
                <div className="journal-entry-description">
                    {props.obj.description}
                </div>
            </div>
        </div>
    );
}
