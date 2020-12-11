package models;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ObservationStore {
  Optional<Observation> getObservationById(long id);
  List<Observation> getObservations();
  void addObservationToStore(Observation toAdd);
  void clearAll();
  void removeObservationById(long id);


  interface IdGenerator{
    long generateId();
  }
}
