// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;
import com.google.sps.FindMeetingQuery;
import com.google.sps.MeetingRequest;
import com.google.sps.TimeRange;
import java.util.Collection;
import java.util.Collections;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import com.google.sps.Event;
import java.util.*;


public final class FindMeetingQuery {
    Collection<TimeRange> timeRanges = new ArrayList<>();
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    if(request.getDuration() > TimeRange.WHOLE_DAY.duration()) {
        return timeRanges;
    }
    if(request.getAttendees ().isEmpty() || request.getDuration() == 0 || events.isEmpty()) {
        timeRanges.add(TimeRange.WHOLE_DAY);
        return timeRanges;
    }
    HashSet<String> req_attendants = new HashSet<>();
    for(String person: request.getAttendees())
        req_attendants.add(person);
    long req_duration = request.getDuration();

    int start = 0;
    int end = 0;
    while(end <= TimeRange.END_OF_DAY){
        if(available(events, req_attendants, end)) {
            while(available(events, req_attendants, end) && end <= TimeRange.END_OF_DAY)
                end+=1;
            if(end-start >= req_duration) {
                TimeRange time = TimeRange.fromStartEnd(start, end-1, true);
                timeRanges.add(time);
            }
        } else {
            while(!available(events, req_attendants, end) && end <= TimeRange.END_OF_DAY)
                end+=1;
        }   start=end-1;
    }
    return timeRanges;
  }
  private static boolean available(Collection<Event> events, Collection<String> req_attendants, int timeSlot) {
    for(Event event: events){
        TimeRange when = event.getWhen();
        Set<String> attandents = event.getAttendees();
        int start = when.start();
        int end = when.end();
        //return false if this event is within the timeslot but required attendants are taken
        if(start <= timeSlot && timeSlot <= end && !Collections.disjoint(attandents, req_attendants))
            return false;
    }
    return true;
  }
}
